const express = require('express')
const router = express.Router();
const path = require('path')
const {GetCart} = require(path.join(__dirname,'..','controller','CusGetCart'));

router.route('/getcart/:email').get(GetCart);

module.exports = router;