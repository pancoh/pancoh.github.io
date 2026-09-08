#!/usr/bin/env node
/**
 * sync.mjs — Sincroniza repositórios do GitHub com o portfólio.
 *
 * Uso:  npm run sync
 *
 * Requer:
 *   - gh CLI instalado e autenticado (gh auth login)
 *   - node >= 18
 */

import { execSync }                        from 'node:child_process';
import { readFileSync, writeFileSync }     from 'node:fs';
import { join, dirname }                   from 'node:path';
import { fileURLToPath }                   from 'node:url';
import { checkbox, input, select, confirm } from '@inquirer/prompts';

const ROOT          = join(dirname(fileURLToPath(import.meta.url)), '..');
const PROJECTS_FILE = join(ROOT, 'projects.json');
const HTML_FILE     = join(ROOT, 'index.html');

const MARKER_START = '<!-- PROJECTS:START -->';
const MARKER_END   = '<!-- PROJECTS:END -->';

// ── GitHub ───────────────────────────────────────────────────────────────────

function fetchRepos() {
  try {
    const out = execSync(
      'gh repo list --json name,isPrivate,hasPages,homepageUrl,description --limit 200',
      { encoding: 'utf-8' }
    );
    return JSON.parse(out);
  } catch {
    console.error('\nErro: gh CLI não encontrado ou não autenticado.');
    console.error('→ Instale em https://cli.github.com');
    console.error('→ Depois execute: gh auth login\n');
    process.exit(1);
  }
}

// ── Projetos ─────────────────────────────────────────────────────────────────

function loadProjects() {
  try {
    return JSON.parse(readFileSync(PROJECTS_FILE, 'utf-8'));
  } catch {
    return [];
  }
}

function saveProjects(projects) {
  writeFileSync(PROJECTS_FILE, JSON.stringify(projects, null, 2) + '\n', 'utf-8');
}

// ── Gerador de HTML ───────────────────────────────────────────────────────────

const SUBDIV_LABELS = {
  paineis:       'Painéis',
  sistemas:      'Sistemas',
  ferramentas:   'Ferramentas',
  apresentacoes: 'Apresentações',
};

const SUBDIV_ORDER = ['paineis', 'sistemas', 'ferramentas', 'apresentacoes'];

function row(project, num) {
  const isExternal = /^https?:\/\//.test(project.url);
  const ariaLabel  = isExternal
    ? ` aria-label="${project.title} — abre em site externo"`
    : '';
  const subdiv     = project.subdiv ? ` data-subdiv="${project.subdiv}"` : '';
  const topics     = (project.topics || []).join(' ');

  return `
        <a class="project-row" href="${project.url}" data-topic="${topics}"${subdiv}${ariaLabel}>
          <span class="number">${String(num).padStart(2, '0')}</span>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <span class="category">${project.category || ''}</span>
          <span class="row-arrow" aria-hidden="true">↗</span>
        </a>`;
}

function subdiv(name) {
  return `
        <div class="subdiv-header" data-subdiv="${name}">
          <span class="subdiv-label">${SUBDIV_LABELS[name] || name}</span>
        </div>`;
}

function generateHTML(projects) {
  const trabalho   = projects.filter(p => p.division === 'trabalho');
  const pessoal    = projects.filter(p => p.division === 'pessoal');
  const construcao = projects.filter(p => p.division === 'construcao');

  let num = 1;

  // Trabalho — agrupado por subdivisão
  let trabalhoRows = '';
  for (const key of SUBDIV_ORDER) {
    const group = trabalho.filter(p => p.subdiv === key);
    if (!group.length) continue;
    trabalhoRows += subdiv(key);
    for (const p of group) trabalhoRows += row(p, num++);
  }

  // Pessoal
  let pessoalRows = '';
  for (const p of pessoal) pessoalRows += row(p, num++);

  // Em construção — projetos configurados + placeholder fixo
  let construcaoRows = '';
  for (const p of construcao) construcaoRows += row(p, num++);
  construcaoRows += `
        <div class="project-row wip">
          <span class="number">—</span>
          <h3>Em breve</h3>
          <p>Novo projeto em desenvolvimento. Mais detalhes em breve.</p>
          <span class="category">Em breve</span>
          <span class="row-arrow" aria-hidden="true">·</span>
        </div>`;

  const count = trabalho.length + pessoal.length;

  const html = `<!-- PROJECTS:START -->

    <!-- ── Aba: Trabalho ── -->
    <div class="tabpanel" id="tab-trabalho" role="tabpanel" aria-labelledby="tab-btn-trabalho">
      <div class="filters" role="group" aria-label="Filtrar projetos por tema" hidden>
        <button type="button" data-filter="todos" aria-pressed="true">Todos</button>
        <button type="button" data-filter="mobilidade" aria-pressed="false">Mobilidade</button>
        <button type="button" data-filter="dados" aria-pressed="false">Dados</button>
        <button type="button" data-filter="aprendizagem" aria-pressed="false">Aprendizagem</button>
      </div>
      <div class="project-list">${trabalhoRows}
      </div>
    </div>

    <!-- ── Aba: Pessoal ── -->
    <div class="tabpanel" id="tab-pessoal" role="tabpanel" aria-labelledby="tab-btn-pessoal" hidden>
      <div class="project-list">${pessoalRows}
      </div>
    </div>

    <!-- ── Aba: Em construção ── -->
    <div class="tabpanel" id="tab-construcao" role="tabpanel" aria-labelledby="tab-btn-construcao" hidden>
      <div class="project-list">${construcaoRows}
      </div>
    </div>

    <!-- PROJECTS:END -->`;

  return { html, count };
}

function updateHTML(projects) {
  let src = readFileSync(HTML_FILE, 'utf-8');

  const si = src.indexOf(MARKER_START);
  const ei = src.indexOf(MARKER_END) + MARKER_END.length;

  if (si === -1 || ei < MARKER_END.length) {
    console.error('\nErro: marcadores PROJECTS:START / PROJECTS:END não encontrados no index.html.');
    console.error('Adicione os marcadores manualmente ao redor dos tabpanels.\n');
    process.exit(1);
  }

  const { html: projectsBlock, count } = generateHTML(projects);

  // Substitui o bloco de projetos
  src = src.slice(0, si) + projectsBlock + src.slice(ei);

  // Atualiza contagem inicial (aba Trabalho ativa)
  const countText = `${String(count).padStart(2, '0')} ${count === 1 ? 'projeto' : 'projetos'}`;
  src = src.replace(
    /(<span id="contagem"[^>]*>)[^<]*/,
    `$1${countText}`
  );

  writeFileSync(HTML_FILE, src, 'utf-8');
  return count;
}

// ── Prompt: configurar novo projeto ──────────────────────────────────────────

async function configureProject(repo) {
  console.log(`\nConfigurando: ${repo.name}`);

  const defaultUrl = repo.hasPages && repo.homepageUrl
    ? repo.homepageUrl
    : `/${repo.name}/`;

  const title       = await input({ message: 'Título:', default: repo.name });
  const description = await input({ message: 'Descrição:', default: repo.description || '' });
  const url         = await input({ message: 'URL:', default: defaultUrl });

  const division = await select({
    message: 'Divisão:',
    choices: [
      { name: 'Trabalho',        value: 'trabalho' },
      { name: 'Pessoal',         value: 'pessoal' },
      { name: 'Em construção',   value: 'construcao' },
    ],
  });

  let subdivisao = null;
  if (division === 'trabalho') {
    subdivisao = await select({
      message: 'Subdivisão:',
      choices: [
        { name: 'Painéis',        value: 'paineis' },
        { name: 'Sistemas',       value: 'sistemas' },
        { name: 'Ferramentas',    value: 'ferramentas' },
        { name: 'Apresentações',  value: 'apresentacoes' },
      ],
    });
  }

  const topics = await checkbox({
    message: 'Temas (para filtro):',
    choices: [
      { name: 'Mobilidade',   value: 'mobilidade' },
      { name: 'Dados',        value: 'dados' },
      { name: 'Aprendizagem', value: 'aprendizagem' },
    ],
  });

  const category = await input({
    message: 'Categoria (linha da listagem):',
    default: topics.map(t => t[0].toUpperCase() + t.slice(1)).join(' / '),
  });

  return {
    repo:        repo.name,
    title,
    description,
    url,
    division,
    subdiv:      subdivisao,
    topics,
    category,
  };
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log('\n── Sync de repositórios ─────────────────────────────\n');

  const repos    = fetchRepos();
  const projects = loadProjects();
  const inPortfolio = new Set(projects.map(p => p.repo));

  // Tabela de status
  const col = (s, n) => String(s ?? '').padEnd(n);
  console.log(`  ${col('Repositório', 42)} ${col('Visib.', 9)} ${col('Pages', 6)} Portfólio`);
  console.log('  ' + '─'.repeat(68));
  for (const r of repos) {
    const vis  = r.isPrivate ? 'privado' : 'público';
    const pg   = r.hasPages  ? 'sim'     : '—';
    const port = inPortfolio.has(r.name) ? '✓' : '';
    console.log(`  ${col(r.name, 42)} ${col(vis, 9)} ${col(pg, 6)} ${port}`);
  }

  // Seleção interativa
  const { selected } = await checkbox({
    message: '\nSelecione os repositórios para o portfólio:',
    choices: repos.map(r => ({
      name: [
        r.isPrivate ? '[privado]' : '[público]',
        r.hasPages  ? '[Pages]'  : '        ',
        r.name,
        r.description ? `— ${r.description.slice(0, 60)}` : '',
      ].join('  '),
      value: r.name,
      checked: inPortfolio.has(r.name),
    })),
    pageSize: 20,
  }).then(v => ({ selected: v }));           // checkbox retorna o array direto

  const selectedSet = new Set(selected);

  const added   = selected.filter(name => !inPortfolio.has(name));
  const removed = [...inPortfolio].filter(name => !selectedSet.has(name));

  if (!added.length && !removed.length) {
    console.log('\nNenhuma alteração. Portfólio já está atualizado.\n');
    return;
  }

  if (removed.length) {
    console.log(`\nRemovendo: ${removed.join(', ')}`);
  }

  // Mantém existentes, remove desmarcados
  let updated = projects.filter(p => selectedSet.has(p.repo));

  // Avisa sobre repos privados adicionados
  for (const name of added) {
    const r = repos.find(r => r.name === name);
    if (r?.isPrivate) {
      const ok = await confirm({
        message: `"${name}" é privado — o link pode não funcionar. Incluir mesmo assim?`,
        default: false,
      });
      if (!ok) {
        selectedSet.delete(name);
        continue;
      }
    }
    const project = await configureProject(r);
    updated.push(project);
  }

  // Salva e reconstrói o HTML
  saveProjects(updated);
  const count = updateHTML(updated);

  const countText = `${String(count).padStart(2, '0')} ${count === 1 ? 'projeto' : 'projetos'}`;
  console.log(`\n✓ projects.json salvo`);
  console.log(`✓ index.html atualizado (${countText})`);
  console.log('\nPróximos passos:');
  console.log('  git add projects.json index.html');
  console.log('  git commit -m "Atualiza projetos do portfólio"');
  console.log('  git push\n');
}

main().catch(err => {
  console.error('\nErro inesperado:', err.message ?? err);
  process.exit(1);
});
