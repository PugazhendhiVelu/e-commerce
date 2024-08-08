const path = require('path');
const cartModel = require(path.join(__dirname, '..', 'models', 'cart'));
const customerModel = require(path.join(__dirname, '..', 'models', 'customer'));


exports.EditCart = async (req, res)=>{
    const { email, pid, Qty } = req.body;           
    if (!email || !pid) {
        return res.status(404).send('User or product not found');
    }
    if(Qty<=0){
        return res.send("Quantity should greater than one")
    }

    try {
        const user = await customerModel.findOne({ email }, { projection: { _id: 1 } });

        if (!user) {
            return res.status(404).send('User not found');
        }
        
        let user_id = user._id.toHexString();
        console.log(user_id);
        await cartModel.updateOne({ $and: [{ uid: user_id }, { pid: pid }] }, { $set: { qty: Qty } });
        return res.json("accepted");
    } catch (err) {
        console.log('Error while adding the product to cart:', err);
        return res.status(500).send('Internal server error');
    }
};