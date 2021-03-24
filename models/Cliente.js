const mongoose = require('mongoose');
const ClienteSchema = new mongoose.Schema(
  {
    nome : String,
    email : String,
    senha : String,
    estado : String,
    cidade : String,
    endereço : String,
    cep : String,
  }
);

module.exports = mongoose.model('Cliente', ClienteSchema);