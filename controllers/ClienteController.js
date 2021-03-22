const mongoose = require('mongoose');
const Cliente = require('../models/Cliente');

module.exports ={
  async show(req, res){
    let clientes = await Cliente.find();
    return res.json(clientes);
  },
  async index(req,res){
    let clientes = await Cliente.find({ email : req.query.email});
    return res.json(clientes);
  },
  async destroy(req,res){
    let clientes = await Cliente.findByIdAndRemove(req.params.id);
    return res.json(clientes);
  },
  async update(req,res){
    let clientes = await Cliente.findByIdAndUpdate(req.params.id,req.body,{new:true}); 
    return res.json(clientes);
  },
  async store(req, res){
    const clientes =  await Cliente.create(req.body);
    return res.json(clientes);
  }
};