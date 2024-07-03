import { validationResult } from 'express-validator';
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';

// @desc Fetch all products
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  if (products) {
    res.send(products);
  } else {
    res.status(404);
    throw new Error('Products not found');
  }
});

// @desc Create a product
export const createProduct = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const product = await Product.create(req.body);
  if (product) {
    res.status(201).json({ message: 'Product created successfully', product });
  } else {
    res.status(404);
    throw new Error('Product not created');
  }
});

// @desc Update a product
export const updateProduct = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ errors: [{ msg: 'Product not found' }] });
  }
});

// @desc Delete a product
export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (product) {
    res.json({ message: 'Product deleted successfully' });
  } else {
    res.status(404).json({ errors: [{ msg: 'Product not found' }] });
  }
});

// @desc Increase product quantity
export const increaseProductQuantity = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    product.quantity += 1;
    const updatedProduct = await product.save();
    res.status(200).json({ message: 'Quantity increased successfully', updatedProduct });
  } else {
    res.status(404).json({ errors: [{ msg: 'Product not found' }] });
  }
});

// @desc Decrease product quantity
export const decreaseProductQuantity = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    product.quantity = Math.max(0, product.quantity - 1);
    const updatedProduct = await product.save();
    res.status(200).json({ message: 'Quantity decreased successfully', updatedProduct });
  } else {
    res.status(404).json({ errors: [{ msg: 'Product not found' }] });
  }
});

export default {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
};