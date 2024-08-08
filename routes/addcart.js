const express = require('express')
const router = express.Router();
const path = require('path')
const {AddCart} = require(path.join(__dirname,'..','controller','CusAddCart'));

router.route('/addcart(.html)?').post(AddCart);

module.exports = router;