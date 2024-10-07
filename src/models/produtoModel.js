const bancoDeDados = require('../config/banco-de-dados');

function adicionarProduto(titulo, local, quantidade) {
    bancoDeDados.query(`INSERT INTO produtos (produto, fornecedor, quantidade, criadoEm) VALUES ('${titulo}', '${local}', '${quantidade}', NOW())`)
    .then(() => {
        console.log("Produto criado com sucesso");
    })
    .catch((err) => {
        console.log(err);
    });
}


async function listandoEstoque() {
    const eventos = await bancoDeDados.query('SELECT * FROM produtos');
    return eventos[0];
}

module.exports = {
    adicionarProduto,
   listandoEstoque
}
