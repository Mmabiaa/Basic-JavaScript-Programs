const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log("Connected to MongoDB..."))
    .catch(err => console.log(err));


app.use('/', authRoutes);

app.listen(5000, () => console.log('Server running on http://localhost:5000'));