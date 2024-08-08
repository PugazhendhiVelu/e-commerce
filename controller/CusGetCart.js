const path = require('path');
const cartModel = require(path.join(__dirname, '..', 'models', 'cart'));
const customerModel = require(path.join(__dirname, '..', 'models', 'customer'));
const productModel = require(path.join(__dirname, '..', 'models', 'Product'));

exports.GetCart = async (req, res) => {
    const email = req.params.email;
    console.log(email);
    try {
        const uid = await customerModel.findOne({ email }, { projection: { _id: 1 } });
        if (!uid) {
            return res.status(404).send('User not found');
        }
        let user_id = uid._id;
        user_id.toHexString();
        console.log(user_id);
        const cartItems = await cartModel.find({ "uid": user_id });
        if (cartItems.length === 0) {
            return res.status(404).send('No items found in the cart');
        }
        const products = await Promise.all(
            cartItems.map(async item => {
                return await productModel.findById(item.pid);
            })
        );
        const response = cartItems.map(cartItem => {
            const productDetail = products.find(product => product._id.toString() === cartItem.pid.toString());
            console.log(productDetail);
            
            return {
                qty: cartItem.qty,
                p_price: productDetail ? productDetail.p_price : null,
            };
        });
        const total = response.reduce((acc, item) => {
            return acc + (item.qty * item.p_price);
        }, 0);
        console.log(total);
        res.status(200).json({ products: products, total: total });       
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
};
