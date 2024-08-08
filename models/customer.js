const mongoose = require ("mongoose");

const customerSchema = new mongoose.Schema({
    username:String,
    email:{
        type:String,
        lowercase:true
    },
    password:String,
    phno:String,
    doornumber:String,
    street:String,
    city:String,
    state:String,
    pincode:String

})
const customerModel= mongoose.model("users",customerSchema);
module.exports = customerModel;