# Portfólio Web - Angular

Este repositório contém o código-fonte do meu portfólio web pessoal, desenvolvido com
Angular, TypeScript e SCSS.

O projeto foi pensado como uma vitrine técnica e visual: além de apresentar projetos,
contato e tecnologias, ele também mostra exemplos de código com preview visual simulado,
como se fosse uma pequena experiência de editor dentro do próprio portfólio.

## Objetivo

O objetivo principal é demonstrar:

- organização de componentes standalone em Angular;
- uso de TypeScript, signals, inputs e outputs;
- criação de interfaces responsivas com SCSS;
- snippets de código com syntax highlighting;
- previews simulados para tecnologias e ferramentas;
- navegação fluida entre seções.

Nenhum código exibido nos snippets é executado dinamicamente pelo usuário. Os outputs são
componentes Angular controlados, usados apenas para representar visualmente o resultado dos
exemplos.

## Estrutura

As principais áreas do portfólio ficam em `src/app/features/components`:

- `header`: navegação, idioma e menu mobile;
- `home`: apresentação inicial e snippet em destaque;
- `about-me`: resumo profissional;
- `tech`: cards de tecnologias com painel de snippet e preview;
- `projects`: cards com links para site e repositório;
- `contacts`: links de contato;
- `footer`: informações finais.

Componentes compartilhados ficam em `src/app/features/shared`:

- `code-snippet`: janela de código com abas, highlight e output dinâmico;
- `output-*`: previews simulados usados pelos snippets de tecnologia.

Serviços e utilitários principais:

- `Responsive`: leitura de breakpoints com Angular CDK;
- `Language`: estado do idioma ativo;
- `StateComponents`: gerenciamento de estado de visibilidade dos componentes da página;
- `HighlightService` e `HighlightDirective`: integração com `highlight.js`;
- `ActiveElement`: diretiva que marca componentes como ativos ao serem renderizados;
- `translation.ts`: conteúdo textual tipado em inglês e português;
- `snippets.ts`: exemplos de código exibidos pelo `CodeSnippet`.

## Navegação entre seções

A navegação entre as seções do portfólio usa `IntersectionObserver` para detectar qual
componente está visível na tela, combinado com o serviço `StateComponents` para gerenciar
o estado de cada seção. Quando um link de navegação é clicado, o método `activeComponents`
rola suavemente até a seção correspondente.

## Internacionalização

O conteúdo textual do portfólio está centralizado em:

```txt
src/app/utils/translation/translation.ts
```

O estado do idioma é controlado pelo serviço `Language`, que alterna entre `pt-BR` e `en`.
Essa abordagem mantém os textos tipados e próximos do código que consome o conteúdo.

## Testes

O projeto usa o builder de testes do Angular com Vitest.

Os testes cobrem:

- criação dos componentes principais;
- navegação do `Header` em desktop e menu mobile;
- interação com cards e links de `Projects`;
- troca de abas no `CodeSnippet`;
- renderização dos componentes `output-*`;
- interações específicas, como input no output Angular e contador no output Vite.

Para executar:

```bash
npm test -- --watch=false
```

## Scripts

```bash
npm start
```

Inicia o servidor de desenvolvimento.

```bash
npm run build
```

Gera o build de produção.

```bash
npm run build -- --configuration development
```

Gera um build de desenvolvimento.

```bash
npm test -- --watch=false
```

Executa a suíte de testes uma vez.

## Tecnologias

- Angular 21+
- TypeScript
- SCSS
- Angular CDK
- Signals
- RxJS
- Font Awesome
- highlight.js
- Vitest

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
