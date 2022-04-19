const http = require("http"); //módulo HTTP nativo do nodeJS

http
  .createServer(function (req, res) {
    res.end("<h1>Hello World!</h1><h4>Ola, seja bem vindo ao meu site!</h4>");
  })
  .listen(8181); //cria um servidor HTTP na porta 8181
console.log("Servidor rodando na porta 8181");
