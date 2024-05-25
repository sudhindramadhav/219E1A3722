const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001; // You can change the port as needed

// Middleware to parse JSON request body
app.use(express.json());
app.use(cors());

const products = [
  {
    productName: 'Laptop 1',
    price: 2236,
    rating: 4.7,
    discount: 63,
    availability: 'yes'
  },
  {
    productName: 'Laptop 13',
    price: 1244,
    rating: 4.5,
    discount: 45,
    availability: 'out-of-stock'
  },
  {
    productName: 'Laptop 3',
    price: 9102,
    rating: 4.44,
    discount: 98,
    availability: 'out-of-stock'
  },
  {
    productName: 'Laptop 11',
    price: 2652,
    rating: 4.12,
    discount: 70,
    availability: 'yes'
  },
  {
    productName: 'Laptop 4',
    price: 1258,
    rating: 3.8,
    discount: 33,
    availability: 'yes'
  },
  {
    productName: 'Laptop 13',
    price: 8686,
    rating: 3.22,
    discount: 24,
    availability: 'out-of-stock'
  },
  {
    productName: 'Laptop 14',
    price: 9254,
    rating: 3,
    discount: 56,
    availability: 'yes'
  },
  {
    productName: 'Laptop 1',
    price: 1059,
    rating: 2.77,
    discount: 21,
    availability: 'yes'
  }
];

// Route to get all products
app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/categories/:categoryname/products', (req, res) => {
  const categoryName = req.params.categoryname.toLowerCase();

  const filteredProducts = products.filter(product => product.productName.toLowerCase().includes(productName));

  if (filteredProducts.length === 0) {
    return res.status(404).json({ error: 'No products found for the category' });
  }

  res.json(filteredProducts);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = { products, PORT };
