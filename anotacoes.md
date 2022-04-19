**Módulos**

Módulos são pedaços do programa e servem para organizar/separar o código.

Os módulos também são utilizados para utilização de bibliotecas no NodeJS.

**HTTP**

É um protocolo de transferência de dados na WEB por meio de requisições e respostas.

**Express**

Express é um framework para desenvolvimento web backend com o NodeJS. Framework é uma super biblioteca que nos ajuda a realizar uma terefa.

Graças ao Express é possível construir qualquer tipo de aplicação WEB com o NodeJS robustas e completas.

**NPM**
Node Package Manager - gerenciador de pacotes do NODE, serve para baixar bibliotecas em mais diversos projetos.

O *package.json* é um arquivo que contém informações sobre o projeto, principalmente as dependências, ou seja, as bibliotecas e suas *versões* utilizadas.

**Rotas**

Caminhos que apontam para a aplicação e suas páginas. Para defini-las é necessário utilizar o método *get* do Express.

A URL "/" indica a rota inicial/raiz do projeto.

**Parâmetros**

São formas de se passar valore dinâmicos direto pelas rotas. Define-se um parâmetro diâmico colocando-se ":" após a rota e o nome do parâmetro. 

app.get("/rotadinamica/:nome", (req, res) => {
    res.send(`Hello World, ${req.params.nome}`);
});

Um parâmetro se torna opcional se colocar um "?" após o nome do parâmetro.

Parâmetros que não estão na rota são os query params. Os query params podem ser enviados por meio de um "?" e o valor depois do "=" na URL de qualque rota.