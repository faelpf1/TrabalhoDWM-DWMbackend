const mongoose = require('mongoose');
const Produto = require('../models/Produto');

module.exports ={
  async show(req, res){
    let produto = await Produto.find();
    return res.json(produto);
  },
  async indexNome(req,res){
    let produto = await Produto.find({ nome : req.query.nome});
    return res.json(produto);
  },
  async indexCategoria(req,res){
    let produto = await Produto.find({ categoria : req.query.categoria});
    return res.json(produto);
  },
  async destroy(req,res){
    let produto = await Produto.findByIdAndRemove(req.params.id);
    return res.json(produto);
  },
  async update(req,res){
    let produto = await Produto.findByIdAndUpdate(req.params.id,req.body,{new:true}); 
    return res.json(produto);
  },
  async store(req, res){
    const produto =  await Produto.create(req.body);
    return res.json(produto);
  }
};