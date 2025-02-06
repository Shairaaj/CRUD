import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
  const product = req.body;
  try {
    if (!product.name || !product.price || !product.image) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide all fields" });
    }

    const newProduct = new Product(product);

    await newProduct.save();
    res.status(201).json({
      success: true,
      message: "A new product has created successfully",
      data: newProduct,
    });
  } catch (err) {
    console.log(`error: ${err.message}`);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
