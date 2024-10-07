const modelUsuario = require('../models/usuarioModel');
const md5 = require("md5");


function exibirPaginaLogin(request, response) {
  response.render('login');
}

async function autenticarUsuario(request, response) {

  const { email, senha } = request.body;

  const usuario = await modelUsuario.buscarPorEmail(email);

  if (usuario == undefined){
    response.render('login')
    return;
  }

  if (md5(senha) !== usuario.senha) {
    response.render('login')
    return;
  }

  request.session.usuario =usuario;

  response.redirect('/estoque');
}

module.exports = {
  exibirPaginaLogin,
  autenticarUsuario
}