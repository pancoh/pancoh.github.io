# pancoh.github.io

Portfólio pessoal publicado em [ramson.com.br](https://ramson.com.br).
Site estático em HTML/CSS com script de sincronização de repositórios.

---

## Estrutura

```
├── index.html          # Página principal
├── editorial.css       # Estilos
├── projects.json       # Fonte de dados dos projetos
├── scripts/
│   └── sync.mjs        # Script de sincronização com o GitHub
└── package.json
```

### `projects.json`

É aqui que vivem os dados dos projetos exibidos no site. O HTML entre os marcadores `<!-- PROJECTS:START -->` e `<!-- PROJECTS:END -->` é gerado a partir deste arquivo.

```jsonc
[
  {
    "repo": "nome-do-repo",          // nome exato no GitHub
    "title": "Título exibido",
    "description": "Descrição curta.",
    "url": "/caminho/",              // ou URL completa para sites externos
    "division": "trabalho",          // "trabalho" | "pessoal" | "construcao"
    "subdiv": "paineis",             // só para division="trabalho"
                                     // "paineis" | "sistemas" | "ferramentas" | "apresentacoes"
    "topics": ["mobilidade", "dados"], // para o filtro: "mobilidade" | "dados" | "aprendizagem"
    "category": "Mobilidade / Dados"   // texto exibido na linha do projeto
  }
]
```

---

## Sincronização de repositórios

O script `sync.mjs` busca todos os repositórios do GitHub, mostra quais são públicos e quais têm GitHub Pages ativo, e deixa você escolher o que aparece no site.

### Pré-requisitos

```bash
npm install
```

Para ver repositórios privados, instale e autentique o [gh CLI](https://cli.github.com):

```bash
gh auth login
```

Sem o `gh`, o script usa a API pública do GitHub e lista apenas repos públicos.

### Uso

```bash
npm run sync
```

O script vai:

1. Listar todos os repositórios com status de visibilidade e Pages
2. Abrir um checkbox interativo para você marcar o que entra no portfólio
3. Para repos novos: perguntar título, descrição, URL, divisão, subdivisão e temas
4. Salvar `projects.json` e regravar o HTML automaticamente

Após o sync, commitar as mudanças:

```bash
git add projects.json index.html
git commit -m "Atualiza projetos do portfólio"
git push
```

---

## Edição manual

Edite `projects.json` diretamente e rode o script para regravar o HTML:

```bash
npm run sync
# sem alterações na seleção, só confirme — o HTML será regravado
```

Ou edite o HTML diretamente entre os marcadores, sem precisar do script.

---

## Deploy

O site é publicado automaticamente via GitHub Pages a cada push na branch `main`.
Domínio configurado em `CNAME`: `ramson.com.br`.
