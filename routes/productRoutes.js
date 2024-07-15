import express from "express";
import {
  getAllProducts,
  getAllProductsTest,
} from "../controllers/productController.js";

const productRoutes = express.Router();

productRoutes.get("/", getAllProducts);
productRoutes.get("/test", getAllProductsTest);

export default productRoutes;
