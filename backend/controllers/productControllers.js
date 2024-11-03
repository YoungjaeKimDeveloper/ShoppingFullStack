import mongoose from "mongoose";

import Product from "../models/ProductModel.js";

export const createProduct = async (req, res) => {
  const product = req.body;
  const { name, price, image } = product;
  if (!name || !price || !image) {
    return res
      .status(404)
      .send({ success: false, message: "You should Fill up the all Form" });
  }
  try {
    const newProduct = new Product(product);
    await newProduct.save();
    res.send({ success: true, message: "You created new Product!" });
  } catch (error) {
    res.send({ success: false, message: "You failed to create new Product" });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res
      .status(400)
      .send({ success: false, message: "CANNOT FIND THE ITEM" });
  }
  try {
    const itemInfo = await Product.findById(id);
    if (!itemInfo) {
      return res
        .status(400)
        .send({ success: false, message: "CANNOT FIND THE ITEM" });
    }
    await Product.findByIdAndDelete(id);
    res.status(200).send({ success: true, data: itemInfo });
  } catch (error) {
    res.status(404).send({ success: false, message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const findItem = await Product.findById(id);
  if (!findItem) {
    return res
      .status(404)
      .send({ success: false, message: "CANNOT FIND THE PRODUCT" });
  }
  const newProduct = req.body;
  const { name, price, image } = newProduct;
  if (!name || !price || !image) {
    return res
      .status(404)
      .send({ success: false, message: "Please Fill Up the All forms" });
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, newProduct, {
      new: true,
    });
    res.status(201).send({
      success: true,
      message: "Product is Updated!",
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).send({ success: false, message: "Product Updated Fail" });
  }
};
