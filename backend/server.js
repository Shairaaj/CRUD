import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app=express();

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on PORT: http://localhost:${process.env.PORT}`);
    connectDB();
});

app.post("/products",async(req,res)=>{
    const product= req.body;

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success: false, message: "Please provide all fields"})
    }

    const newProduct = new Product(product);

    try{
        await newProduct.save();
        res.status(201).json({success: true, message:"A new product created successfully", data: newProduct});
    }
    catch(err){
        console.log(`error: ${err.message}`);
        res.status(500).json({success: false, message: "Server error"})
    }
})
