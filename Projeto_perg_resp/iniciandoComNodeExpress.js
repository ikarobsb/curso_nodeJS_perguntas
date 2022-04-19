const express = require("express");
const app = express();

app.set("view engine", "ejs"); // Definindo o motor de renderização
app.use(express.static("public")); // Definindo o diretório de arquivos estáticos com o EXPRESS.

app.get("/:nome/:lang", (req, res) => {
  var nome = req.params.nome; // passar parâmetros
  var lang = req.params.lang; // passar parâmetros

  var produtos = [
    { nome: "Notebook", preco: 1299},
    { nome: "iPad Pro", preco: 4199},
    { nome: "Copo", preco: 29.99},
    { nome: "Copo de Vidro", preco: 19.99},
    { nome: "Copo de Plástico", preco: 5.99},
    { nome: "Smartphone", preco: 999},
  ];

  var exibirMsg = true;
  res.render(
    "index", //o express vai procurar o arquivo index.ejs (que deve estar em uma pasta views, por padrão do EXPRESS)
    {
      nome: nome,
      lang: lang,
      msg: exibirMsg,
      produtos: produtos
    }
  );
});

// app.get("/home", (req, res) => {
//   res.render("home");
// });

// app.get("/perfil", (req, res) => {
//   res.render("principal/perfil");
// });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
