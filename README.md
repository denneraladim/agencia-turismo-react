
# Agencia Turismo React

Aplicação front-end de uma agência de turismo fictícia, desenvolvida com foco em boas práticas de desenvolvimento, organização de componentes, responsividade e testes unitários. O projeto simula um site institucional com múltiplas páginas, navegação fluida e layout adaptável a diferentes dispositivos.

🔗 Projeto online: https://agencia-turismo-react.vercel.app/

## Diferenciais do Projeto

- Organização de componentes reutilizáveis
- Navegação entre páginas utilizando React Router
- Estilização organizada com Sass
- Layout responsivo
- Testes unitários utilizando Vitest e React Testing Library
- Código desenvolvido com TypeScript

## Estrutura do Projeto

O projeto segue uma organização baseada em componentes, com separação clara entre páginas, componentes reutilizáveis e estilos globais.

- **components**: Componentes reutilizáveis da aplicação (Header, Footer, Container), cada um com seus próprios estilos e testes.
- **pages**: Páginas da aplicação (Home, Sobre, Contato, NotFound), organizadas por rota.
- **styles**: Estilos globais, variáveis de cores e mixins Sass utilizados em toda a aplicação.
- **App.tsx**: Configuração principal da aplicação e rotas.
- **main.tsx**: Ponto de entrada do React.

## Funcionalidades

- Navegação entre páginas institucionais (Home, Sobre, Contato e NotFound)
- Layout responsivo para diferentes tamanhos de tela
- Estrutura de componentes reutilizáveis
- Organização de estilos com Sass
- Componentes cobertos por testes unitários

##  Tecnologias Utilizadas

- **React**
- **TypeScript**
- **Vite**
- **Sass**
- **React Router DOM**
- **Vitest**
- **React Testing Library**

## Testes Unitários

Os testes foram desenvolvidos com **Vitest** e **React Testing Library**, com foco no comportamento dos componentes.

Componentes testados:

- **Container**: garante a renderização correta dos children
- **Header**: valida exibição do logo e links de navegação
- **Footer**: valida renderização do conteúdo do rodapé

O objetivo dos testes é garantir que a interface funcione conforme esperado e facilitar a manutenção do código.


## Como Executar o Projeto
    https://github.com/denneraladim/agencia-turismo-react.git
    npm install
    npm run dev

## Rodar os Testes Unitários

    npm test
    npm run test:watch (roda os testes em modo observação)


## Responsividade

O layout foi desenvolvido com abordagem mobile first, utilizando media queries e mixins do Sass para garantir uma boa experiência em dispositivos móveis e adaptação para telas maiores.

















