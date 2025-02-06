import express from "express";
import { createProduct } from "../controllers/createProduct.js";
import { deleteProduct } from "../controllers/deleteProduct.js";
import { getProducts } from "../controllers/getProducts.js";
import { updateProduct } from "../controllers/updateProduct.js";
export const router= express.Router();

router.post("/product",createProduct);
router.get("/products",getProducts);
router.delete("/deleteProduct/:id", deleteProduct);
router.put("/updateProduct/:id", updateProduct);