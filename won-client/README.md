# Client Won Games 🎮

## Instalação das dependências
```shell
yarn
```

## Iniciando modo de desenvolvimento
```shell
yarn dev
```
O projeto vai estar disponível na rota: `http://localhost:3000/`

## Husky
Para o husky funcionar é preciso iniciar ele no projeto
```shell
yarn husky init
```

## Testes
### Comando para rodar teste
```shell
yarn test
```

### Observando alterações nos testes
> É preciso ter dado pelo menos o ```git init``` no projeto antes de iniciar esse comando.
```shell
test:watch
```

## Storybook
```shell
yarn storybook
```

## Criação de componente automático
> Utilizando [Plop](https://plopjs.com/) podemos automatizar criação de arquivos, no caso do boilerplate o comando abaixo criar componentes React de forma automática.

### Ao executar esse comando é preciso responder a pergunta do script com relação ao nome do componente
```shell
yarn generate
```

### Ou usar dessa forma onde você faz o comando e já escreve o nome do componente
```shell
yarn generate nomeComponente
```
