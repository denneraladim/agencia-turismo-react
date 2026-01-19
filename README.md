
# Agencia Turismo React

Aplicação front-end de uma agência de turismo fictícia, desenvolvida com React e TypeScript, com foco em boas práticas de desenvolvimento, componentização, responsividade, testes unitários e acessibilidade básica.

O projeto simula um site institucional com múltiplas páginas, navegação fluida e layout adaptável a diferentes dispositivos.

🔗 Projeto online: https://agencia-turismo-react.vercel.app/

## Diferenciais do Projeto

- Componentização reutilizável

- Navegação entre páginas com React Router

- Estilização modular com Sass

- Layout responsivo

- Testes unitários com Vitest e React Testing Library

- Código tipado com TypeScript

- Aplicação de princípios básicos de acessibilidade 


## Acessibilidade Básica

-  A aplicação foi desenvolvida considerando princípios de **acessibilidade básica**, garantindo uma experiência de uso melhor para todos os usuários, inclusive aqueles que utilizam tecnologias assistivas.

### As principais práticas aplicadas incluem:

- **HTML semântico**: uso de header, nav, footer e address  para estrutura clara e interpretação correta por leitores de tela.
- **Hierarquia de títulos**: estrutura adequada de h1 e h2 para facilitar navegação e compreensão do conteúdo.
- **Associação de seções aos títulos**: implementação de aria-labelledby.
- **Links de contato acessíveis**: tel e mailto para fácil utilização em dispositivos móveis e leitores de tela.
- **Textos alternativos em imagens**: uso de alt descritivo para melhor experiência de leitura.
- **Conteúdo textual claro**: evita depender exclusivamente de estilos visuais para transmitir informações.

 O foco da aplicação é garantir uma **estrutura compreensível, navegável e semântica**, alinhada às melhores práticas de desenvolvimento Front-End.

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
- Estrutura baseada em componentes reutilizáveis
- Organização de estilos com Sass
- Componentes cobertos por testes unitários.

##  Tecnologias Utilizadas

- **React**
- **TypeScript**
- **Vite**
- **Sass**
- **React Router DOM**
- **Vitest**
- **React Testing Library**

## Testes Unitários

Os testes foram desenvolvidos com Vitest e React Testing Library, com foco no comportamento dos componentes.

Componentes testados:

- **Container**: renderização correta dos children

- **Header**: exibição do logo e links de navegação

- **Footer**: renderização do conteúdo do rodapé

O objetivo é garantir o funcionamento esperado da interface e facilitar a manutenção do código.

## Como Executar o Projeto
    https://github.com/denneraladim/agencia-turismo-react.git
    npm install
    npm run dev

## Rodar os Testes Unitários
    npm run test
    npm run test:watch (roda os testes em modo observação)

## Responsividade

O layout foi desenvolvido utilizando media queries para garantir uma boa experiência em dispositivos móveis e adaptação para telas maiores.


















