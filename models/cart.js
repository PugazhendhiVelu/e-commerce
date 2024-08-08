const mongoose = require("mongoose");
const cartschema = new mongoose.Schema({
    uid:String,
    pid:String,
    qty:Number
})
const cartModel = mongoose.model("cart",cartschema);

module.exports= cartModel;