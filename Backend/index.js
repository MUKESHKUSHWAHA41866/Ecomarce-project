const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Cart Item Schema & Model
const cartItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});
const CartItem = mongoose.model('CartItem', cartItemSchema);

app.get('/', (req, res) => {
    res.send('Welcome to the Homepage!');
  });
// Routes
// Add a product to cart
app.post('/cart/add', async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const item = new CartItem({ name, price, quantity });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// View all cart items
app.get('/cart', async (_req, res) => {
  try {
    const items = await CartItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Remove a product by ID
app.delete('/cart/remove/:id', async (req, res) => {
  try {
    await CartItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item removed' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Calculate total price
app.get('/cart/total', async (_req, res) => {
  try {
    const items = await CartItem.find();
    const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    res.json({ total });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
