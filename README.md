
# Agencia Turismo React

O projeto está publicado na Vercel:[Acessar Projeto](https://agencia-turismo-react.vercel.app/) (Abre em uma nova aba)

Essa aplicação da Agencia de Turismo Ficticia foi desenvolvida utilizando **`React`**, **`TypeScript`**, **`Sass`**, **`React Router Dom`**, **`Test Unitário`**  e **`Responsividade`**.


##  Tecnologias Utilizadas

**`Vite`**
**`React`**
**`TypeScript`**
**`Sass (pré-processador CSS)`**
**`React-router-dom`**
**`Vitest e React Testing Library (Teste Unitário)`**

## Documentação

- [vite](https://vitejs.dev/)
- [react](https://react.dev/)
- [sass](https://sass-lang.com/)
- [typeScript](https://www.typescriptlang.org/)
- [reactrouter](https://reactrouter.com/)
- [vitest](https://vitest.dev/)
- [testing-library](https://testing-library.com/docs/react-testing-library/intro/)

## Clonar o Repositório:

    git clone https://github.com/denneraladim/agencia-turismo-react.git

 ## Criação do projeto com vite, react e TypeScript (se ainda não tiver) e entrar na pasta: 

    npm create vite@latest agencia-turismo-react
    cd agencia-turismo-react

## Execute a aplicação

     npm run dev

## Rodar os Testes Unitários

    npm test (roda todos os testes uma vez)
    npm run test:watch  (roda os testes em modo observação)


## Instalar as Dependências

    npm install sass
    npm install react-router-dom
    npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest


## Etapas do Desenvolvimento

1. Configuração inicial do projeto com React e TypeScript

2. Inserção da fonte Roboto do Google

3. Configuração do SASS e criação de estilos globais

4. Criação da pasta Components: Header, Footer e Container

5. Implementação do Header e Footer com responsividade

6. Criação da pasta Pages: Home, Sobre, Contatos e NotFound

7. Configuração do React Router Dom para navegação entre páginas

8. Criação do componente Base para envolver todas as páginas com Header, Footer e Container, garantindo layout consistente

9. Criação de mixins e media queries para responsividade

10. Implementação do layout responsivo para diferentes tamanhos de tela

11. Criação de Testes Unitários para os componentes reutilizáveis

## Testes Unitários

- Criados com Vitest e React Testing Library

- Cobrem os seguintes componentes:

1. Container: garante que os children são renderizados corretamente

2. Header: verifica se o logo e links de navegação aparecem

3. Footer: verifica se o texto do rodapé é renderizado

4. Foco em comportamento do componente, garantindo que a interface funcione como esperado

##  Funcionalidades

 - Navegação entre páginas (Home, Sobre, Contatos, NotFound)

- Layout responsivo para diferentes tamanhos de tela

- Estrutura de componentes reutilizáveis

- Estilização organizada com Sass e mixins

- Componentes testados com testes unitários


