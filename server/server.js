const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

app.use(express.json());

app.get('/', (req, res) => res.send('API RUNNING'));

// Routes

app.use('/api/products', require('./routes/api/products'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
