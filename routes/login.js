const express = require('express')
const router = express.Router();
const path = require('path')
const {userlogin} = require(path.join(__dirname,'..','controller','CusLogin'));

router.route('^/|login(.html)?').post(userlogin);

module.exports = router;