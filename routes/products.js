const express = require('express')
const router = express.Router();
const path = require('path')
const {Products} = require(path.join(__dirname,'..','controller','Products'));

router.route('/products').get(Products);

module.exports = router;