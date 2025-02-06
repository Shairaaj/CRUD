import mongoose from "mongoose";
import Product from "../models/product.model.js";


export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const product = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    process.exit(1)
    return res
      .status(404)
      .json({ success: false, message: "Invalid Product Id" });
    
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(201).json({ success: true, data: updatedProduct });
  } catch (err) {
    console.log(`Error: ${err.message}`);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
