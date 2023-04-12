const express = require('express');
const connectDB = require('./database/db');
const bodyParser = require('body-parser');

// Routes import
const products = require('./routes/api/products');
const users = require('./routes/api/users');

const app = express();

// Connect Database
connectDB();

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('API RUNNING'));

// Routes
app.use('/api/products', products);
app.use('/api/users', users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
