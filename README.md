
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

-  A aplicação foi desenvolvida considerando princípios de acessibilidade básica, visando melhorar a experiência de uso para todos os usuários, incluindo pessoas que utilizam tecnologias assistivas.

### As principais práticas aplicadas incluem:

-  Uso de HTML semântico (section, header, footer, address, nav) para melhor interpretação por leitores de tela

-  Estrutura adequada de títulos hierárquicos (h1, h2) para facilitar a navegação por tecnologias assistivas

-  Associação de seções com seus respectivos títulos utilizando aria-labelledby

-  Links de contato acessíveis (tel: e mailto:), facilitando o uso em dispositivos móveis e leitores de tela

-  Textos alternativos (alt) descritivos em imagens ilustrativas

-  Conteúdo textual claro, evitando dependência exclusiva de estilos visuais para transmitir informações

-  O foco da acessibilidade no projeto é garantir uma estrutura compreensível, navegável e semântica, alinhada às boas práticas recomendadas para aplicações front-end.

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

    npm run test
    npm run test:watch (roda os testes em modo observação)


## Responsividade

O layout foi desenvolvido com abordagem mobile first, utilizando media queries e mixins do Sass para garantir uma boa experiência em dispositivos móveis e adaptação para telas maiores.


















