import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Product from "./models/ProductModel.js";
import productRoutes from "./routes/productRoutes.js";
dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING in ${PORT}`);
  connectDB();
});
