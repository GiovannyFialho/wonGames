# Won Games - API
## Requisitos
A configuração do banco de dados por ser encontrada em [config/database.js](config/database.js).
## Desenvolvimento
Depois de clonar o projeto, instale essa dependências:
```
yarn install
```
E rode:
```
yarn develop
```
Essas urls vão acessar:
- `http://localhost:1337/admin` - O Dashboard para criar e popular os dados.
- `http://localhost:1337/graphql` - GraphQL Playground para testar as queries.

A primeira vez que você acessar o Admin, irá precisar criar um usuário.
## Populando dados
Esse projeto usa a rota `/games/populate` para popular os dados do site GoG.

Siga esses passo-a-passo:
- Vá até Roles & Permissions > Public e verifique se a rota `game:populate` está disponível para fazer o upload corretamente.
- Com o Strapi ligado, execute o seguinte comando no terminal:
```bash
$ curl -X POST http://localhost:1337/games/populate

# you can pass query parameters like:
$ curl -X POST http://localhost:1337/games/populate?page=2
$ curl -X POST http://localhost:1337/games/populate?search=simcity
$ curl -X POST http://localhost:1337/games/populate?sort=rating&price=free
$ curl -X POST http://localhost:1337/games/populate?availability=coming&sort=popularity
```
## Usando um dump
Antes de tudo, você precisa fazer download do [dump.sql](https://github.com/Won-Games/database/raw/master/dump.sql) de [database repository](https://github.com/Won-Games/database).

1. Criar um banco de dados e usuário Postgres:

```sh
CREATE USER wongames WITH ENCRYPTED PASSWORD 'wongames123';
CREATE DATABASE wongames OWNER wongames;
```

2. Popular o banco de dados, usando o seguinte comando (se lembre de apontar o lugar onde você colocou o `dump.sql`)

```sh
psql -h localhost -p 5432 -U wongames wongames < dump.sql
```

E você pode acessar `localhost:1337/admin` com os seguintes dados de acesso: 

```sh
email: wongames@wongames.com
password: Wongames123
```
