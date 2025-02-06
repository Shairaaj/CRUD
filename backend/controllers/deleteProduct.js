import Product from "../models/product.model.js";

export const deleteProduct= async(req,res)=>{
    const {id}= req.params;
    
    try{
        await Product.findByIdAndDelete(id);
        res.status(201).json({success: true, message: "Product deleted successfully"})
    }
    catch(err){
        console.log(`Error: ${err.message}`);
        res.status(500).json({success: false, message: "Error in deleting"});
    }
}