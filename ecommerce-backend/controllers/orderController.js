const Order = require('../models/orderModel');

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('products.productId');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.json(newOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
