const express = require('express');
const app = express();
const PORT = 3000; // You can change the port as needed

// Middleware to parse JSON request body
app.use(express.json());
app.use(cors())

// Dummy data - replace with your actual data source (e.g., database)
const categories = {
  phone: [
    { id: 1, name: 'iPhone 13', price: 799 },
    { id: 2, name: 'Samsung Galaxy S21', price: 899 },
  ],
  computer: [
    { id: 3, name: 'MacBook Pro', price: 1299 },
    { id: 4, name: 'Dell XPS 13', price: 1099 },
  ],
  tv: [
    { id: 5, name: 'Samsung QLED 4K TV', price: 1499 },
    { id: 6, name: 'LG OLED TV', price: 1799 },
  ],
  earphone: [
    { id: 7, name: 'AirPods Pro', price: 249 },
    { id: 8, name: 'Sony WH-1000XM4', price: 299 },
  ],
  tablet: [
    { id: 9, name: 'iPad Air', price: 599 },
    { id: 10, name: 'Samsung Galaxy Tab S7', price: 649 },
  ],
  charger: [
    { id: 11, name: 'Anker USB-C Charger', price: 29 },
    { id: 12, name: 'Belkin Wireless Charger', price: 39 },
  ],
  mouse: [
    { id: 13, name: 'Logitech MX Master 3', price: 99 },
    { id: 14, name: 'Razer DeathAdder Elite', price: 69 },
  ],
  keypad: [
    { id: 15, name: 'Corsair K95 RGB Platinum', price: 169 },
    { id: 16, name: 'SteelSeries Apex Pro', price: 199 },
  ],
  bluetooth: [
    { id: 17, name: 'Bose QuietComfort Earbuds', price: 279 },
    { id: 18, name: 'JBL Flip 5 Bluetooth Speaker', price: 129 },
  ],
  pendrive: [
    { id: 19, name: 'SanDisk Ultra USB 3.0', price: 19 },
    { id: 20, name: 'Samsung FIT Plus', price: 29 },
  ],
  remote: [
    { id: 21, name: 'Logitech Harmony Elite', price: 349 },
    { id: 22, name: 'Apple TV Remote', price: 59 },
  ],
  speaker: [
    { id: 23, name: 'Sonos One', price: 199 },
    { id: 24, name: 'UE Boom 3', price: 149 },
  ],
  headset: [
    { id: 25, name: 'HyperX Cloud II', price: 99 },
    { id: 26, name: 'SteelSeries Arctis 7', price: 149 },
  ],
  laptop: [
    { id: 27, name: 'HP Pavilion 15', price: 799 },
    { id: 28, name: 'Lenovo ThinkPad X1 Carbon', price: 1499 },
  ],
  pc: [
    { id: 29, name: 'Alienware Aurora R12', price: 1799 },
    { id: 30, name: 'Custom-built Gaming PC', price: 1299 },
  ],
};

// Array of accepted category names
const acceptedCategories = Object.keys(categories);

// Route to get products by category name
app.get('/categories/:categoryname/products', (req, res) => {
  const categoryName = req.params.categoryname.toLowerCase();

  // Validate category name
  if (!acceptedCategories.includes(categoryName)) {
    return res.status(400).json({ error: 'Invalid category name' });
  }

  // Find products by category name
  const products = categories[categoryName] || [];

  res.json(products);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = { categories, PORT };