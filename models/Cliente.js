const mongoose = require('mongoose');
const ClienteSchema = new mongoose.Schema(
  {
    nome: String,
    email: String,
    senha: String,
  }

);

module.exports = mongoose.model('Cliente', AlunoSchema);