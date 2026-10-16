# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

O usuário principal é o próprio autor. O site funciona como registro pessoal: um índice para localizar os próprios trabalhos e mostrá-los quando for preciso (em uma conversa, uma reunião ou um envio de link).

Quem recebe o link é público secundário. Essa pessoa chega com um projeto em mente ou com curiosidade sobre o conjunto, e o site precisa levá-la ao que procura.

## Product Purpose

Arquivo de projetos publicado em ramson.com.br. Reúne produtos publicados e trabalhos internos em mobilidade urbana, dados, produtos digitais e inteligência artificial, da metodologia à implementação.

Uma visita dá certo quando a pessoa encontra e abre o projeto público que procurava (painel, sistema ou publicação). Entender a abrangência do acervo é consequência, não objetivo.

## Positioning

O acervo mistura trabalho público e trabalho que não pode ser aberto. Os itens públicos levam ao projeto em funcionamento. Os itens internos aparecem com escopo e contribuição, sem código, repositório ou dados sensíveis. Esse registro honesto do que existe, inclusive do que fica fechado, é o que distingue o site de um portfólio comum.

## Operating Context

- Os projetos públicos vivem em subcaminhos do mesmo domínio (por exemplo `/painel_planos_cgdi/`, `/painel_bicicleta_cgdi/`, `/iqtpc/`, `/apresentacao_dados_pemob/`), publicados a partir de outros repositórios, ou em domínios externos (`planmob-cgdi.vercel.app`).
- O contexto de origem é o trabalho em política pública de mobilidade urbana. As siglas do domínio (CGDI, SEMOB, PEMOB, PlanMob, GTFS, IQTPC, PAC, TCI, PEI/PPA) fazem parte do vocabulário dos projetos.
- O catálogo é mantido à mão: o autor edita o HTML e envia para a branch `main`.

## Capabilities and Constraints

- Site estático em HTML e CSS, publicado pelo GitHub Pages com domínio próprio (`CNAME`). Sem etapa de build e sem dependências de pacote.
- Conteúdo em `index.html` (cards dos projetos públicos e índice dos internos) e apresentação em `estilo.css`. Miniaturas dos projetos públicos em `assets/projetos/`. Um script curto no próprio HTML filtra o arquivo por categoria.
- Cada projeto tem título, descrição de uma linha, tecnologia ou natureza, categoria (mobilidade, dados, IA e automação, produtos) e situação (público com link, projeto interno, em desenvolvimento, protótipo, MVP, estudo técnico, conceito, ferramenta interna).
- Itens restritos nunca exibem código, repositório ou dados sensíveis.
- Idioma único: português do Brasil.

## Brand Commitments

- **Autoria discreta.** O nome do autor aparece em poucos pontos (rodapé, metadados), e o texto do site continua impessoal. A forma exata do nome ainda não foi definida; versões anteriores usavam "Ramson".
- **Tom impessoal e não promocional.** O histórico registra a retirada deliberada de tom promocional e de primeira pessoa. Linguagem simples e institucional, frases curtas, voz ativa.
- **Forma convencional, executada com capricho.** Em 2026-10-15, diante de direções visuais incomuns, o autor escolheu o padrão da categoria (galeria de projetos em cards). A régua de qualidade são a galeria do Observable e o Our World in Data.
- **Regras de escrita do autor.** Sem travessão no meio de frases (preferir parênteses, dois pontos ou vírgula), sem emojis, sem entusiasmo artificial.

## Evidence on Hand

- 18 projetos catalogados em `index.html`: 5 públicos com link e 13 internos ou em andamento.
- Projetos públicos: Painel de Planos de Mobilidade Urbana, Painel Bicicleta, PlanMob CGDI, IQTPC, Dados PEMOB.
- Capturas de tela reais dos 5 projetos públicos em `assets/projetos/` (feitas em 2026-10-16 a partir dos endereços publicados, com a origem registrada ao lado de cada arquivo). Não há imagens dos projetos internos, depoimentos, métricas de uso ou imprensa. Trabalho futuro não deve inventar nenhum desses itens.

## Product Principles

1. **Chegar ao projeto primeiro.** O caminho até um projeto público é curto e óbvio; o resto do site serve a esse caminho.
2. **Registrar sem expor.** Projetos internos ficam visíveis como fato, nunca com material que não pode sair do órgão.
3. **Fácil de manter à mão.** Adicionar ou atualizar um projeto deve exigir uma edição simples em um arquivo, sem ferramenta de build.
4. **Sobriedade antes de autopromoção.** O acervo fala pelos projetos; o texto descreve, não vende.
