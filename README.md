# Portfólio Web – Angular

Este repositório contém o código-fonte do meu **portfólio web pessoal**, desenvolvido com **Angular (v21+)**, **TypeScript** e **SCSS**, com foco em **demonstrar raciocínio técnico, arquitetura e modelagem de código**, e não apenas exibir resultados visuais.

A proposta do projeto foge de um portfólio tradicional baseado em screenshots e listas de tecnologias. Aqui, o portfólio funciona como um **ambiente demonstrativo interativo**, onde conceitos de arquitetura frontend, tipagem avançada e organização de código são parte central da experiência.

---

## 🎯 Objetivo do Projeto

O objetivo principal deste projeto é:

* Demonstrar **como eu penso e estruturo código**, não apenas o que eu construo
* Explorar **TypeScript como ferramenta de modelagem**, não só como linguagem
* Criar uma experiência interativa que simula um ambiente real de desenvolvimento
* Servir como vitrine de decisões arquiteturais, padrões e boas práticas

Nenhuma parte do projeto executa código dinâmico real no browser. Todo o comportamento é **simulado de forma controlada**, priorizando clareza conceitual, previsibilidade e segurança.

---

## 🧱 Estrutura Geral do Portfólio

O layout do portfólio é organizado em seções bem definidas:

* **Header**

  * Navegação entre seções
  * Logo
  * Foto/apresentação

* **Seções Principais**

  * Início
  * Sobre Mim
  * Tecnologias
  * Projetos
  * Contatos

* **Footer**

A navegação é fluida e pensada para leitura contínua, priorizando a experiência de quem está avaliando o projeto tecnicamente.

---

## 🧠 Seção de Tecnologias: o Núcleo do Projeto

A seção de **Tecnologias** é o coração conceitual do portfólio.

Em vez de ícones ou listas estáticas, ela apresenta um **ambiente de código simulado**, inspirado em editores reais.

### Code Boxes

* Cada **Code Box** representa um arquivo de um projeto frontend ou backend

  * `component.ts`
  * `template.html`
  * `style.scss`
  * `server.js`
* As caixas possuem **abas por arquivo**
* Apenas uma combinação de caixas pode estar ativa por vez

### Output Box

* Existe uma **única Output Box**
* Ela representa o resultado visual combinado do conjunto de arquivos ativos
* O comportamento é simulado usando:

  * Mocks
  * Delays artificiais
  * Estados intermediários (ex.: loading, transições visuais e composição gradual da saída)

Nenhum código é executado ou interpretado dinamicamente. A saída é previsível e controlada.

---

## 🧩 Modelagem Avançada com TypeScript

Um dos principais diferenciais do projeto é o uso intensivo de **tipagem avançada em TypeScript**.

### Principais conceitos explorados:

* `type` como ferramenta central de modelagem
* **Template Literal Types**
* **Generics**
* Relações entre tokens de código
* Validação estrutural em tempo de compilação

Os códigos exibidos nas Code Boxes:

* Não são simples strings
* São representados por **estruturas tipadas**
* Possuem coerência garantida pelo compilador

Isso permite que o próprio TypeScript atue como um mecanismo de validação conceitual do conteúdo exibido.

---

## 🎭 Simulação, não Execução

Este projeto **não**:

* Executa código do usuário
* Avalia expressões (`eval`)
* Usa sandbox de execução
* Possui backend real

Toda a interatividade é baseada em **simulação controlada**, com foco em:

* Clareza
* Segurança
* Previsibilidade
* Didática

A intenção é representar **como um sistema funciona**, não rodá-lo de fato.

---

## 🛠️ Tecnologias Utilizadas

* Angular (Standalone Components)
* TypeScript
* SCSS
* Signals
* RxJS (uso pontual e controlado)

---

## 📦 Estado do Projeto

Este projeto está em **desenvolvimento ativo** e pode sofrer mudanças estruturais conforme novas ideias arquiteturais forem exploradas.

O código prioriza:

* Clareza conceitual
* Organização
* Tipagem forte
* Coerência interna

---

## 👋 Contato

Caso queira conversar sobre arquitetura frontend, TypeScript, Angular ou design de sistemas demonstrativos, fique à vontade para entrar em contato.

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE)
