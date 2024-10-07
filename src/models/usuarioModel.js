const md5 = require("md5");
const pool = require('../config/banco-de-dados');


function adicionarUsuario(nome, email, senha) {

    pool.query(`INSERT INTO usuarios (nome, email, senha, criadoEm) VALUES ('${nome}', '${email}', '${md5(senha)}', NOW())`).then(() => {
        console.log("Usuário criado com sucesso");
    }).catch((err) => {
        console.log(err);
    });
}

async function buscarPorEmail(email) {

    const usuario = await pool.query(`SELECT * FROM usuarios WHERE email = '${email}'`);
    return usuario[0][0];
}




module.exports = {
    adicionarUsuario,
    buscarPorEmail
}