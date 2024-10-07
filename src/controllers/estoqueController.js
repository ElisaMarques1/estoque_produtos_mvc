const modelProduto = require("../models/produtoModel");

// Responsável por renderizar a página de estoque
async function renderizarPaginaEstoque(request, response) {
  const estoques = await modelProduto.listandoEstoque();
  response.render("estoque", { estoques });
}

// Responsável por renderizar a página de cadastro de produto
function renderizarPaginaProduto(request, response) {
  response.render("criarProduto");
}

function criarProduto(request, response) {
  const { titulo, local, quantidade } = request.body;

  modelProduto.adicionarProduto(titulo, local, quantidade);
  response.redirect("/estoque");


}

module.exports = {
  renderizarPaginaEstoque,
  renderizarPaginaProduto,
  criarProduto
};
