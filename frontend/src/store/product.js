import {create} from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) =>
    set({ products: Array.isArray(products) ? products : [] }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return { success: false, message: "Please fill in all fields." };
    }

    try {
      const res = await fetch("/api/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) {
        const errorData = await res.json();
        return {
          success: false,
          message: errorData?.message || "Failed to create product.",
        };
      }

      const data = await res.json();
      if (!data.data) {
        return { success: false, message: "Invalid response from server." };
      }

      set((state) => ({
        products: Array.isArray(state.products)
          ? [...state.products, data.data]
          : [data.data], // Ensure it stays an array
      }));

      return { success: true, message: "Product created successfully" };
    } catch (error) {
      console.error("Error creating product:", error);
      return {
        success: false,
        message: "An error occurred while creating the product.",
      };
    }
  },
  fetchProducts: async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    set({ products: data.data });
  },
}));