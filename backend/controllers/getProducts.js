import Product from "../models/product.model.js"

export const getProducts= async (req,res)=>{
    try{
        const products= await Product.find({});
        res.status(200).json({success: true, data: products});
    }
    catch(err){
        console.log(`Error: ${err.message}`);
        res.status(500).json({success: false, message: "Server error"});
    }
}