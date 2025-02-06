import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import Product from "./models/product.model.js";
import { router } from "./routes/route.js";

dotenv.config();

const app=express();

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on PORT: http://localhost:${process.env.PORT}`);
    connectDB();
});

app.use(express.json());
app.use("/api/",router);
