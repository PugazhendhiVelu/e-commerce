const express = require('express')
const router = express.Router();
const path = require('path')
const {createUser} = require(path.join(__dirname,'..','controller','CusRegister'));

router.route('/register').post(createUser);

module.exports = router;
