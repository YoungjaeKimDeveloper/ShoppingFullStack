import express from "express";
import {
  createProduct,
  getProducts,
  deleteProduct,
  updateProduct,
} from "../controllers/productControllers.js";
const router = express.Router();

// CREATE PRODUCT
router.post("/", createProduct);
// Get Products
router.get("/", getProducts);
// DELETE PRODUCT
router.delete("/:id", deleteProduct);
// Update Item
router.put("/:id", updateProduct);

export default router;
