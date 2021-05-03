const mongoose = require('mongoose');
const ProdutoSchema = new mongoose.Schema(
  {
    nome: String,
    categoria: String,
    quantidade: String,
    preço: String,
    teste: teste,
  }
);

module.exports = mongoose.model('Produto', ProdutoSchema);