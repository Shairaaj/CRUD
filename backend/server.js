import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";

dotenv.config();

const app=express();

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on PORT: http://localhost:${process.env.PORT}`);
    connectDB();
})

app.get("/products",(req,res)=>{
    res.send("homePage");
})
