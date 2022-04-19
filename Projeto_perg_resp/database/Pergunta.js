const Sequelize = require("sequelize");
const connection = require("./database");

// Definiçãoo de model criador de tabelas

const Pergunta = connection.define("perguntas", {
    titulo: {
        type: Sequelize.STRING, // tipo do dado
        allowNull: false, // não pode ser nulo
    },
    descricao: {
        type: Sequelize.TEXT, // tipo do dado que admite mais caracteres
        allowNull: false,    
    }
})

// Criação da tabela
Pergunta.sync({force: false}).then(() => {
    console.log("Tabela criada com sucesso!");
}) // Não vai forçar a criação da tabela caso ela já exista.

module.exports = Pergunta;
