const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
  async index(req,res){
    const products = await Product.find();

    return res.json(products);
  },

  async show(req,res){
    const product = await Product.findById(req.params.id);
    return res.json(product);
  },

  async store(req, res){
    // Criação
      const product = await Product.create(
        req.body
      // title: req.title,
      // description: req.description,
      // url: req.url
    );
    return res.json(product);
  },

  async update(req,res){
    const product = await Product.findByIdAndUpdate(req.params.id,req.body, {new: true});
    return res.json(product);
  },

  async destroy(req,res){

  }
};