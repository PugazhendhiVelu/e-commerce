const express = require('express')
const router = express.Router();
const path = require('path')
const {Addproduct} = require(path.join(__dirname,'..','controller','AdminAddProduct'));

router.route('/addproduct(.html)?').post(Addproduct);

module.exports = router;