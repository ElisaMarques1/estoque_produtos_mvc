const modelUsuario = require('../models/usuarioModel');

// Responsável por renderizar a página de cadastro de usuários
function exibirPaginaCadastro(request, response) {
  response.render('cadastro');
}

function criarConta(request, response) { 
const { nome, email, senha } = request.body;

modelUsuario.adicionarUsuario(nome, email, senha);

response.redirect('/');
}

module.exports = {
  exibirPaginaCadastro,
  criarConta
}