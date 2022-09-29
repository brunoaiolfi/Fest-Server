# Fest 🍻

## Sobre o projeto:

- Fest é um aplicativo mobile que tem o intuito de mostrar os bares mais próximos de sua localização.

## Sobre a API:

- Esta api tem o intuito de fazer o CRUD de usuários e o CRUD de bares.

## Ferramentas utilizadas:

- NodeJs, Express, Prisma e postgress

## Rotas da api:

### ROTAS DE USO DO USUÁRIO 😃

- Cadastrar usuário - /user
- Editar usuário - /user/
- Pegar todos usuários - /user/all
- Pegar usuário pelo id - /user/
- Pegar usuário pelo email - /user/email/
- Deletar usuário - /user/

### ROTAS DOS BARES 🍻

- Cadastrar bar - /bar
- Editar bar - /bar
- Pegar todos os bares - /bar/all
- Pegar um bar pelo id - /bar
- Pegar os bares pelo id do usuário - /bar/userId/
- Pegar os bares do usuário logado - /bar/mine/
- Deletar um bar - /bar

## Como utilizar 
  
  Após baixar o repositório utilize um `yarn add` para fazer o download de todas as dependências.
  Após isto crie um arquivo .env conforme o exemplo.
  Cria uma migration do banco de dados utilizando `prisma migrate dev --name init`.
  Inicie o projeto com o comando `yarn dev`.
