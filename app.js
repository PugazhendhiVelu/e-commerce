const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const DBConnect = require(path.join(__dirname, 'config', 'DBConnection'));

// Load environment variables
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Import routes
const register = require(path.join(__dirname, 'routes', 'register'));
const login = require(path.join(__dirname, 'routes', 'login'));
const addproduct = require(path.join(__dirname,'routes','addproduct'));
const product = require(path.join(__dirname,'routes','product'));
const products = require(path.join(__dirname,'routes','products'));
const addcart = require(path.join(__dirname,'routes','addcart'));
const getcart = require(path.join(__dirname,'routes','getcart'));
const editcart = require(path.join(__dirname,'routes','editcart'));
const deletecart = require(path.join(__dirname,'routes','deletecart'));
// Connect to the database
DBConnect();

// Use the register route
app.use('/victus/v1', register);
app.use('/victus/v1/',products);
app.use('/victus/v1/',product);     //Category based retreival
app.use('/victus/v1/',deletecart);
app.use('/victus/v1/',addcart);
app.use('/victus/v1/',getcart);
app.use('/victus/v1/',editcart);
app.use('/victus/v1/',addproduct);
app.use('/victus/v1/',login);

app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
});
