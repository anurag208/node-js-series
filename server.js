const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to handle form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (optional)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/product', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'product.html'));
});

app.get('/add-product', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'add-product.html'));
});

app.post('/submit-product', (req, res) => {
  const productName = req.body.name;
  res.send(`<h1>Product "${productName}" added successfully!</h1><a href="/">Go Home</a>`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
