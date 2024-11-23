# Arduino Proto Academy React App

![License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/React-18+-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-blue)

## Sobre o Projeto

**Arduino Proto Academy React App** é uma aplicação web desenvolvida para ser um produto educacional que pode ser utilizado em disciplinas relacionadas à **robótica**, **prototipação** e **cultura maker**. Este projeto visa enriquecer o processo de aprendizagem em sala de aula, oferecendo aos alunos uma plataforma interativa e dinâmica.

### Funcionalidades Principais

- **Material Educacional:** Conteúdo estruturado com vídeos do YouTube para facilitar o aprendizado teórico.
- **Quiz Interativo:** Teste seus conhecimentos com quizzes dinâmicos desenvolvidos com [SurveyJS](https://surveyjs.io/).
- **Interface Moderna:** Desenvolvido com **React**, **TypeScript** e **Vite** para alta performance e escalabilidade.
- **Design Responsivo:** Interface construída com o framework **Flowbite**, garantindo uma experiência fluida em diferentes dispositivos.

---

## Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces.
- **TypeScript**: Tipagem estática para maior confiabilidade no código.
- **Vite**: Build tool para desenvolvimento rápido.
- **Flowbite**: Componentes estilizados baseados em Tailwind CSS.
- **SurveyJS**: Ferramenta para criação de quizzes interativos.
- **YouTube Integration**: Exibição de vídeos educacionais diretamente na plataforma.

---

## Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 20 ou superior)
- Gerenciador de pacotes: `npm` ou `yarn`

### Passos para Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/diegoarmandoo/arduino-proto-academy-react-app.git
   cd arduino-proto-academy-react-app

2. Instale as dependências:
  ```bash
  npm install
  # ou
  yarn install

3. Inicie o servidor de desenvolvimento:
  ```bash
  npm run dev
  # ou
  yarn dev

### Estrutura do Projeto

arduino-proto-academy-react-app/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/          # Páginas principais do app
│   ├── assets/         # Imagens, ícones e outros recursos estáticos
│   └── main.tsx        # Ponto de entrada do React
├── public/             # Arquivos públicos
├── package.json        # Dependências e scripts
├── vite.config.ts      # Configuração do Vite
└── README.md           # Documentação do projeto
