const express = require('express');
const app = express();
const data = require('./data.json');


app.get('/products', (req, res) => {
  const { productStock, minPrice, maxPrice } = req.query;

  let filteredProducts = data;

  if (productStock) {
    filteredProducts = filteredProducts.filter(product => product.productStock === productStock);
  }

  if (minPrice && maxPrice) {
    filteredProducts = filteredProducts.filter(product => product.productPrice >= minPrice && product.productPrice <= maxPrice);
  }

  res.json(filteredProducts);
});


app.get('/productsByName', (req, res) => {
  const { productName } = req.query;

  if (!productName) {
    return res.status(400).json({ error: 'Product name is required' });
  }

  const productByName = data.filter(product => product.productName.toLowerCase().includes(productName.toLowerCase()));

  res.json(productByName);
});


app.get('/products/:productId', (req, res) => {
  const { productId } = req.params;

  const productById = data.find(product => product.productId === parseInt(productId, 10));

  if (!productById) {
    return res.status(404).json({ error: 'Product not found' });
  }

  res.json(productById);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});