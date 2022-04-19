const express = require("express");
const app = express();
// BodyParser - para receber dados do formulário e traduzir para estrutura javascript
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");

// Database

connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso!");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs"); // Definindo o motor de renderização
app.use(express.static("public")); // Definindo o diretório de arquivos estáticos com o EXPRESS.

app.use(bodyParser.urlencoded({ extended: false })); // Decodificando dados enviados pelo usuáiro
app.use(bodyParser.json()); // permite-se a leitura de dados enviados via json

// Rotas index
app.get("/", (req, res) => {
  //equivale ao select all from perguntas
  Pergunta.findAll({ raw: true, order: [["id", "DESC"]] }).then((perguntas) => {
    //raw: true - retorna os dados em formato de objeto - order: [] passo como serão exibidas as perguntas (ASC = crescente e DSC = decrescente)
    res.render("index", { perguntas: perguntas });
  });
});

// Rota formulário
app.get("/perguntar", (req, res) => {
  res.render("perguntar.ejs");
});

// Rota para receber dados do formulário
app.post("/salvarpergunta", (req, res) => {
  // Variáveis que recebem os dados do formulário
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  // Inserindo dados no banco
  //método create - cria um novo registro (equivale ao insert into etc.)
  Pergunta.create({
    titulo: titulo,
    descricao: descricao,
  }).then(() => {
    res.redirect("/");
  });
});

app.get("/pergunta/:id", (req, res) => {
  var id = req.params.id;
  Pergunta.findOne({
    where: { id: id },
  }).then((pergunta) => {
    if (pergunta != undefined) {
      Resposta.findAll({
        where: { perguntaId: pergunta.id },
        order: [["id", "DESC"]],
      }).then((respostas) => {
        res.render("pergunta", {
          pergunta: pergunta,
          respostas: respostas,
        });
      });
    } else {
      // pergunta não encontrada
      res.redirect("/");
    }
  });
});

app.post("/responder", (req, res) => {
  var corpo = req.body.corpo;
  var perguntaId = req.body.pergunta;
  Resposta.create({
    corpo: corpo,
    perguntaId: perguntaId,
  }).then(() => {
    res.redirect("/pergunta/" + perguntaId);
  });
});

// Criando servidor
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
