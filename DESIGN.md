---
name: Arquivo de projetos
description: Galeria de projetos em mobilidade urbana, dados e produtos digitais, no padrão da categoria.
colors:
  azul-acao: "#2563eb"
  azul-acao-forte: "#1d4ed8"
  azul-selecao: "#dbeafe"
  tinta: "#111827"
  texto-secundario: "#4b5563"
  texto-terciario: "#6b7280"
  fundo-branco: "#ffffff"
  superficie-cinza: "#f6f7f9"
  linha: "#e5e7eb"
  linha-forte: "#d1d5db"
typography:
  headline:
    fontFamily: "Public Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(22px, 2.2vw, 28px)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  section-title:
    fontFamily: "Public Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  group-title:
    fontFamily: "Public Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Public Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  title-row:
    fontFamily: "Public Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    letterSpacing: "-0.005em"
  body:
    fontFamily: "Public Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: "Public Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Public Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "14px"
    fontWeight: 500
  meta:
    fontFamily: "Public Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "13px"
    fontWeight: 400
rounded:
  focus: "4px"
  control: "6px"
  card: "8px"
  pill: "999px"
spacing:
  xs: "6px"
  sm: "8px"
  md: "16px"
  lg: "32px"
  gutter: "32px"
  gutter-mobile: "16px"
  container: "1280px"
components:
  card-project:
    backgroundColor: "{colors.fundo-branco}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.card}"
    padding: "14px 14px 16px"
  card-thumb:
    backgroundColor: "{colors.superficie-cinza}"
  filter-chip:
    backgroundColor: "{colors.fundo-branco}"
    textColor: "{colors.texto-secundario}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "36px"
  filter-chip-active:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.fundo-branco}"
    rounded: "{rounded.pill}"
  nav-link:
    textColor: "{colors.texto-secundario}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "8px 12px"
  nav-link-hover:
    backgroundColor: "{colors.superficie-cinza}"
    textColor: "{colors.tinta}"
  index-row:
    textColor: "{colors.tinta}"
    padding: "14px 0"
  tag:
    textColor: "{colors.texto-secundario}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "5px 12px"
  footer:
    backgroundColor: "{colors.superficie-cinza}"
    textColor: "{colors.texto-terciario}"
    padding: "28px 0"
---

# Design System: Arquivo de projetos

## Overview

**Creative North Star: "A Galeria de Referência"**

O sistema segue o padrão da categoria: uma galeria de projetos em cards, no nível de acabamento da galeria do Observable e do Our World in Data. A forma é convencional por escolha. O cuidado está na execução: medidas consistentes, contraste correto, estados claros e nenhum efeito que atrase o acesso a um projeto.

A página é clara e densa sem ficar apertada. Fundo branco, texto quase preto, cinzas neutros e um único azul de ação. Uma só família tipográfica (Public Sans) cobre todos os papéis. Os projetos publicados aparecem como cards uniformes com captura real do projeto. Os trabalhos internos aparecem como um índice compacto de linhas, sem caixa e sem imagem. A diferença de forma comunica a diferença de acesso.

O acervo começa no primeiro viewport. A abertura é baixa (título de uma linha e frase de apoio), e a faixa de filtros vem logo abaixo.

**Key Characteristics:**
- Fundo branco, tinta #111827, cinzas neutros e um único azul de ação.
- Public Sans em toda a página, sem fonte de exibição.
- Cards uniformes com miniatura 16:10 de captura real.
- Índice de linhas para o que não pode ser aberto.
- Superfícies planas em repouso; sombra só no hover.
- Nenhuma animação de entrada.

## Colors

Paleta neutra e fria, com um único azul reservado à ação.

### Primary
- **Azul de Ação** (#2563eb): link "Ver projeto" dentro do card e anel de foco. É a única cor de destaque da página.
- **Azul de Ação Forte** (#1d4ed8): título do card no hover.
- **Azul de Seleção** (#dbeafe): fundo da seleção de texto.

### Neutral
- **Tinta** (#111827): texto principal, títulos, fundo do filtro ativo e do link de salto.
- **Texto Secundário** (#4b5563): descrições, frase de apoio, links da navegação, filtros inativos, situação no índice.
- **Texto Terciário** (#6b7280): linha de tema e tecnologia, contagens, resumo, URL do card, rodapé.
- **Fundo Branco** (#ffffff): fundo da página, da barra de topo e dos cards.
- **Superfície Cinza** (#f6f7f9): fundo das miniaturas enquanto carregam, hover da navegação e rodapé.
- **Linha** (#e5e7eb): bordas de card, divisórias do índice, filetes entre seções.
- **Linha Forte** (#d1d5db): borda dos filtros, borda do card no hover, sublinhado dos links do rodapé.

### Named Rules
**The One Blue Rule.** O azul aparece apenas em ação e foco: o link do card, o título em hover e o anel de foco. Nenhum fundo, faixa ou ilustração usa azul.

**The Ink Selection Rule.** O estado selecionado usa tinta, não azul. O filtro ativo é preenchido com #111827 e texto branco.

## Typography

**Display Font:** Public Sans (com system-ui, -apple-system, Segoe UI, sans-serif)
**Body Font:** Public Sans (mesma pilha)

**Character:** Uma sem serifa institucional em toda a página, nos pesos 400, 500, 600 e 700. A hierarquia vem de tamanho e peso, com espaçamento entre letras levemente negativo nos títulos.

### Hierarchy
- **Headline** (700, clamp(22px, 2.2vw, 28px), 1.2): título de abertura, uma linha no desktop, com text-wrap: balance.
- **Section Title** (600, 24px, 1.25): título da seção Escopo.
- **Group Title** (600, 20px): "Projetos publicados" e "Trabalhos internos", seguidos da contagem em peso 500 e cor terciária.
- **Title** (600, 16px, 1.3): título do card.
- **Title Row** (600, 15px): título da linha do índice.
- **Body** (400, 16px, 1.5): frase de apoio (15px abaixo de 600px), máximo de 720px. O texto de Escopo usa 17px com máximo de 680px.
- **Body Small** (400, 14px): descrição do card e da linha, nota do grupo.
- **Label** (500, 14px): filtros e navegação.
- **Meta** (400, 13px): linha de tema e tecnologia, URL, situação (500).

### Named Rules
**The Tabular Count Rule.** Toda contagem (filtros, resumo, títulos de grupo) usa algarismos tabulares, para que os números não pulem quando o filtro muda.

**The Title First Rule.** Em card e em linha, o título vem antes de qualquer metadado. Não há rótulo acima do título.

## Layout

Coluna única centralizada com largura máxima de 1280px e margem lateral de 32px (16px abaixo de 600px). A barra de topo fica fixa com 56px de altura e filete inferior.

A ordem é: abertura baixa (32px acima, 20px abaixo), faixa de ferramentas com filete superior (filtros à esquerda, resumo à direita, quebra de linha quando falta espaço), grupo de publicados, grupo de internos, seção Escopo, rodapé. Grupos consecutivos ficam a 48px de distância.

A grade de cards usa colunas iguais com espaço de 16px: 5 colunas acima de 1240px, 3 até 1240px, 2 até 860px e 1 até 600px. A fileira completa de publicados cabe no primeiro viewport a 1440 por 900.

O índice interno usa três colunas (título e descrição, tema e tecnologia com 260px, situação com 150px alinhada à direita). Até 860px vira duas colunas, com a situação à direita. Até 600px, tudo empilha.

A seção Escopo divide 1 para 2 (título e texto) e vira coluna única até 860px.

**The Archive First Rule.** Nada fica entre a abertura e o acervo além da faixa de filtros. A primeira miniatura aparece acima de 600px a 390 de largura.

## Elevation & Depth

Superfícies planas. A profundidade vem de filetes de 1px e de uma superfície cinza muito clara, não de sombra.

### Shadow Vocabulary
- **Hover do card** (`box-shadow: 0 6px 20px -8px rgba(17, 24, 39, .18)`): só no card publicado, só em dispositivos com hover.

### Named Rules
**The Flat At Rest Rule.** Nenhum elemento tem sombra em repouso. A única sombra é uma resposta ao hover do card.

## Shapes

Cantos pequenos e bordas finas. Cards com raio de 8px e borda de 1px. Navegação e link de salto com 6px. Anel de foco com 4px. Filtros e tags de área são pílulas (999px). A miniatura é recortada pelo card (overflow hidden) e separada do corpo por um filete.

## Components

### Card de projeto publicado
Card uniforme, sóbrio e inteiramente clicável (o card é o link).
- **Corner Style:** 8px.
- **Background:** fundo branco; miniatura sobre superfície cinza.
- **Border:** 1px na cor de linha; linha forte no hover.
- **Miniatura:** proporção 16:10, captura real do projeto com object-fit: cover, filete inferior.
- **Ordem do corpo:** título, descrição, linha de tema e tecnologia, rodapé com link. A linha de tema e tecnologia fica presa logo acima do link (margin-top: auto), para alinhar os rodapés de cards com textos de tamanhos diferentes.
- **Rodapé:** link "Ver projeto" (ou "Ler publicação") em azul, peso 600, com ícone SVG de traço de 16px; URL em cor terciária com reticências. A URL fica oculta na largura de 5 colunas (acima de 1240px).
- **Internal Padding:** 14px nas laterais e no topo, 16px embaixo; 6px entre os itens.
- **Hover:** borda linha forte, sombra suave e título em azul forte. Transição de 0,15s em borda e sombra.

### Índice de trabalhos internos
Lista de linhas sem caixa e sem imagem. Filete superior na lista e filete inferior em cada linha, 14px de respiro vertical. Título em 15px peso 600, descrição em 14px secundária, tema e tecnologia em meta, situação em 13px peso 500 secundária. Não tem hover, porque a linha não é um link.

### Chips (filtros por tema)
- **Style:** pílula de 36px de altura, borda linha forte, fundo branco, texto secundário em 14px peso 500, contagem em 13px terciária.
- **State:** ativo com fundo e borda em tinta, texto branco e contagem em #d1d5db. Hover (só nos inativos) escurece a borda para o terciário e o texto para tinta. O estado é exposto por aria-pressed.
- **Comportamento:** o clique reorganiza a grade e o índice de uma vez, atualiza as contagens dos grupos e oculta o grupo que ficar vazio. Sem animação.

### Linha de resumo
Texto de 14px terciário ao lado dos filtros, números em tinta peso 600, itens separados por ponto médio.

### Tags de área
Pílulas de 1px na cor de linha, texto secundário em 14px, sem estado interativo. Usadas na seção Escopo.

### Navigation
Barra de topo branca, fixa, com filete inferior. Marca "Arquivo de projetos" em 15px peso 700. Dois links (Projetos, Escopo) em 14px peso 500, cor secundária, raio de 6px; no hover, fundo cinza e texto em tinta. A mesma barra serve ao mobile.

### Rodapé
Faixa com fundo cinza e filete superior. Texto terciário em 14px, nome em tinta peso 600, link sublinhado com sublinhado em linha forte, que passa a tinta no hover.

### Foco
Anel de 2px em azul de ação, afastado 2px (3px no card), com raio de 4px (8px no card). Link de salto visível só no foco.

## Do's and Don'ts

### Do:
- **Do** usar os tokens de :root em estilo.css para toda cor, raio e margem lateral.
- **Do** usar captura real do projeto na miniatura, em 16:10. Sem captura, não há card com imagem.
- **Do** manter título, descrição, tema e tecnologia e link nessa ordem em todo card novo.
- **Do** colocar projetos sem acesso público no índice de linhas, nunca em card.
- **Do** restringir hover a `@media (hover: hover)` e manter o anel de foco de 2px em azul.
- **Do** usar algarismos tabulares em qualquer contagem.

### Don't:
- **Don't** usar uma segunda cor de destaque. O azul é o único.
- **Don't** introduzir outra família tipográfica ou uma fonte de exibição.
- **Don't** usar título gigante na abertura; o título fica em uma linha de até 28px.
- **Don't** adicionar animação de entrada, revelação no scroll ou transição além de 0,15s em cor, borda e sombra.
- **Don't** dar sombra a elementos em repouso.
- **Don't** colocar rótulo ou sobretítulo acima do título do card.
- **Don't** inventar imagens para trabalhos internos.
