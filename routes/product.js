const express = require('express')
const router = express.Router();
const path = require('path')
const {Product} = require(path.join(__dirname,'..','controller','Product'));

router.route('/product/:category').get(Product);

module.exports = router;