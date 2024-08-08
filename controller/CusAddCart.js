const path = require('path');
const cartModel = require(path.join(__dirname, '..', 'models', 'cart'));
const customerModel = require(path.join(__dirname, '..', 'models', 'customer'));


exports.AddCart = async (req, res) => {
    const { email, pid} = req.body;
    const qty = 1;

    if (!email || !pid) {
        return res.status(404).send('User or product not found');
    }

    try {
        const user = await customerModel.findOne({ email }, { projection: { _id: 1 } });
        
        if (!user) {
            return res.status(404).send('User not found');
        }
        let user_id = user._id.toHexString();
        // user_id = `ObjectId('${user_id.toHexString()}')`;
        console.log(user_id);
        console.log(pid);

        await cartModel.create({
            uid:user_id,
            pid:pid,
            qty:qty
        });
        return res.json("accepted");
    } catch (err) {
        console.log('Error while adding the product to cart:', err);
        return res.status(500).send('Internal server error');
    }
};