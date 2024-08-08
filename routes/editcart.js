const express = require('express')
const router = express.Router();
const path = require('path')
const {EditCart} = require(path.join(__dirname,'..','controller','CusEditCart'));

router.route('/editcart').put(EditCart);

module.exports = router;