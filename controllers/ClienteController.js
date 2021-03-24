const mongoose = require('mongoose');
const Cliente = require('../models/Cliente');

module.exports ={
  async show(req, res){
    let cliente = await Cliente.find();
    return res.json(cliente);
  },
  async indexEmail(req,res){
    let cliente = await Cliente.find({ email : req.query.email});
    return res.json(cliente);
  },
  async indexNome(req,res){
    let cliente = await Cliente.find({ nome : req.query.nome});
    return res.json(cliente);
  },
  async indexCep(req,res){
    let cliente = await Cliente.find({ cep : req.query.cep});
    return res.json(cliente);
  },
  async indexCidade(req,res){
    let cliente = await Cliente.find({ cidade : req.query.cidade});
    return res.json(cliente);
  },
  async indexEndereco(req,res){
    let cliente = await Cliente.find({ endereço : req.query.endereço});
    return res.json(cliente);
  },
  async indexEstado(req,res){
    let cliente = await Cliente.find({ estado : req.query.estado});
    return res.json(cliente);
  },
  async destroy(req,res){
    let cliente = await Cliente.findByIdAndRemove(req.params.id);
    return res.json(cliente);
  },
  async update(req,res){
    let cliente = await Cliente.findByIdAndUpdate(req.params.id,req.body,{new:true}); 
    return res.json(cliente);
  },
  async store(req, res){
    const cliente =  await Cliente.create(req.body);
    return res.json(cliente);
  }
};