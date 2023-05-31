const express = require('express');
const connectDB = require('./database/db');
const bodyParser = require('body-parser');

// Routes import
const products = require('./routes/api/products');
const users = require('./routes/api/users');
const auth = require('./routes/api/auth');
const orders = require('./routes/api/orders');

const app = express();

// Connect Database
connectDB();

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('API RUNNING'));

// Routes
app.use('/api/products', products);
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/orders', orders)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
