# Desafio Técnico: Gerenciamento de Usuários

Este projeto tem o objetivo de facilitar o gerenciamento de usuários, oferecendo operações básicas de CRUD (Create, Read, Update, Delete). A aplicação permite a criação, visualização, atualização e exclusão de usuários em um sistema simples, com uma interface amigável e intuitiva.

## Tecnologias Utilizadas

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Node.js**
- **JSON**

## Como Executar o Projeto

Siga os passos abaixo para clonar o repositório, instalar as dependências e iniciar o servidor localmente.

1. **Clone o repositório:**

   `git clone https://github.com/felipebignoto/desafio-brandmonitor.git`

2. **Instale as dependências:**

   `npm install`

3. **Inicie o servidor:**

   `npm run dev`

## Rotas Disponíveis

Abaixo estão as rotas disponíveis na API para gerenciamento de usuários:

| Método | URL               | Privada | Funcionalidade                                     |
| :----- | ----------------- | :-----: | -------------------------------------------------- |
| GET    | /api/usuarios     |   Sim   | Retorna a lista com todos os usuários cadastrados. |
| POST   | /api/usuarios     |   Sim   | Cria um novo usuário.                              |
| DELETE | /api/usuarios     |   Sim   | Remove um usuário com base no ID especificado.     |
| GET    | /api/usuarios/:id |   Sim   | Retorna o usuário que contém o ID especificado.    |
