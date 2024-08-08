const path = require('path');
const productModel = require(path.join(__dirname, '..', 'models', 'Product'));

exports.Products = async (req, res) => {
    try {
        const products = await productModel.find();
        console.log(products);
        if (products.length === 0) {
            return res.status(404).send('No products found in this category');
        }
        res.json(products);
    } catch (err) {
        console.error('Failed to fetch products. Error:', err);
        res.status(500).send('Internal server error');
    }
};