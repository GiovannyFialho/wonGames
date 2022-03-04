import "setimmediate";
global.fetch = require("node-fetch");

import { server } from "../src/utils/mockServer/server";

beforeAll(() => {
  // Ficar escutando todas as chamadas nos testes
  server.listen()
})

afterEach(() => {
  // Reseta todos os handlers para caso eles sejam chamados novamente
  server.resetHandlers()
})

afterAll(() => {
  // Fecha o server e limpa os testes
  server.close()
})
