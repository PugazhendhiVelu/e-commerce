const express = require('express')
const router = express.Router();
const path = require('path')
const {DeleteCart} = require(path.join(__dirname,'..','controller','CusDeleteCart'));

router.route('/deletecart').delete(DeleteCart);

module.exports = router;