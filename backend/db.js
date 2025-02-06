import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB= async()=>{
    try{
        const connect= await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database connected to: ${connect.connection.host}`)
    }
    catch(err){
        console.log(`Error message: ${err.message}`);
        process.exit(1);
    }
}