const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  description: String,
  imageUrl: String,
  stock: Number
});

module.exports = mongoose.model('Product', productSchema);
