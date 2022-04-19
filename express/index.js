const express = require("express");
const app = express(); // é necessário receber uma função do express que vai carregar todo o framework - Iniciando o express

app.get("/", (req, res) => {
  res.send("Hello World"); // devolvendo uma repsosta. O send é um método do express. A resposta pode ser um arquivo, um JSON, uma string etc.
  // Cada rota só pode enviar uma única vez.
});

app.get("/rota2", (req, res) => {
  res.send("Hello World 2");
});

app.get("/rota3/:artigo?", (req, res) => {
  // o ? torna o parâmetro ocional

  var artigo = req.params.artigo;

  if (artigo == undefined) {
    res.send("Hello World 3");
  } else {
    res.send("Hello World 3 " + artigo);
  }
});

app.get("/rotadinamica/:nome", (req, res) => {
  // req são os dados passados pelo usuário;
  // res são os dados que serão enviados para o usuário;
  res.send(`Hello World, ${req.params.nome}`);
});

app.get("/rotadinamica2/:nome/:cidade", (req, res) => {
  res.send(`Oi ${req.params.nome}, você mora em ${req.params.cidade}`);
});

// Query params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação) - SÃO OPCIONAIS

app.get("/queryparams", (req, res) => {
  var parametro = req.query["parametro"]; // o "parametro" é o nome do parâmetro que foi passado na rota
  if (parametro) {
    res.send(parametro);
  } else {
    res.send("Nenhum parâmetro foi passado");
  }
});

// Criação do servidor - sempre por último
app.listen(3000, function (err) {
  if (err) {
    console.error("Ocorreu um erro ", err);
  } else {
    console.log("Servidor rodando na porta 3000");
  }
});
