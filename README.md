# Arduino Proto Academy React App

![License](https://img.shields.io/badge/License-MIT-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6+-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4+-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18.3+-61DAFB?logo=react&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4+-06B6D4?logo=tailwindcss&logoColor=white)
![Flowbite](https://img.shields.io/badge/Flowbite-2.5+-06B6D4?logo=tailwindcss&logoColor=white)
![Survey Core](https://img.shields.io/badge/Survey_Core-1.12.8-orange)

## Sobre o Projeto

**Arduino Proto Academy React App** é uma aplicação web desenvolvida para ser um **produto educacional** que pode ser utilizado em disciplinas relacionadas à **robótica**, **prototipação** e **cultura maker**. Este projeto visa **enriquecer o processo de aprendizagem em sala de aula**, oferecendo aos alunos uma plataforma interativa e dinâmica.


### Funcionalidades Principais

- **Material Educacional:** Conteúdo estruturado com vídeos do YouTube para facilitar o aprendizado teórico.
- **Quiz Interativo:** Teste seus conhecimentos com quizzes dinâmicos desenvolvidos com [SurveyJS](https://surveyjs.io/).
- **Interface Moderna:** Desenvolvido com **React**, **TypeScript** e **Vite** para alta performance e escalabilidade.
- **Design Responsivo:** Interface construída com o framework **Flowbite**, garantindo uma experiência fluida em diferentes dispositivos.


## Tecnologias Utilizadas

- **TypeScript**: Tipagem estática para maior confiabilidade no código.
- **Vite**: Build tool para desenvolvimento rápido.
- **React**: Biblioteca para construção de interfaces.
- **Tailwind**: Uma estrutura CSS para criar rapidamente interfaces de usuário personalizadas.
- **Flowbite**: Componentes estilizados baseados em Tailwind CSS.
- **SurveyJS**: Ferramenta para criação de quizzes interativos.
- **YouTube Integration**: Exibição de vídeos educacionais diretamente na plataforma.


## Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 20 ou superior)
- Gerenciador de pacotes: `npm` ou `yarn`

### Passos para Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/diegoarmandoo/arduino-proto-academy-react-app.git
   cd arduino-proto-academy-react-app
   ```

2. Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    ```

3. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

4. Acesse a aplicação no navegador: http://localhost:5173    


## Estrutura do Projeto
   ```bash
    arduino-proto-academy-react-app/
    ├── public/             # Arquivos públicos
    ├── src/
    |   ├── assets/         # Recursos estáticos
    │   ├── components/     # Componentes reutilizáveis
    │   ├── pages/          # Páginas principais do app
    │   ├── utils/          # Funções auxiliares ou utilitária
    │   └── main.tsx        # Ponto de entrada do React
    ├── package.json        # Dependências e scripts
    ├── vite.config.ts      # Configuração do Vite
    └── README.md           # Documentação do projeto
   ```
