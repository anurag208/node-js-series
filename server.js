const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Import routes
const productRoutes = require("./routes/products");

// Use routes
app.use("/api/products", productRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
