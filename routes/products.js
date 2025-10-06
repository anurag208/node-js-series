const express = require("express");
const router = express.Router();

// Temporary in-memory array (acting as our DB)
let products = [
  { id: 1, name: "Laptop", price: 80000 },
  { id: 2, name: "Mobile", price: 20000 },
];

// ✅ GET all products
router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: products });
});

// ✅ GET a single product by ID
router.get("/:id", (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ success: false, message: "Product not found" });
  }
  res.status(200).json({ success: true, data: product });
});

// ✅ POST create a new product
router.post("/", (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ success: false, message: "Name and price are required" });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
  };
  products.push(newProduct);
  res.status(201).json({ success: true, data: newProduct });
});

// ✅ PUT update a product
router.put("/:id", (req, res) => {
  const { name, price } = req.body;
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ success: false, message: "Product not found" });
  }

  product.name = name || product.name;
  product.price = price || product.price;

  res.status(200).json({ success: true, data: product });
});

// ✅ DELETE a product
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  products = products.filter(p => p.id !== id);
  res.status(200).json({ success: true, message: `Product ${id} deleted` });
});

module.exports = router;
