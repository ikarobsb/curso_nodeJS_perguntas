// O Sequelize "digita" códigos SQL direto no backend por meio de métodos internos à sua biblioteca. É uma manipulação de dados por meio de JavaScript ao invés de SQL.
const Sequelize = require("sequelize");

// Criando a conexão com o banco de dados MySql
const connection = new Sequelize("guiaperguntas", "root", "21111987Ipa", {
  host: "localhost",
  dialect: "mysql",
});

// Exportando a conexão
module.exports = connection;