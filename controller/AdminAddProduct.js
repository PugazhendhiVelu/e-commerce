const path = require('path');
const productModel = require(path.join(__dirname, '..', 'models', 'Product'));

exports.Addproduct=async function (req, res) {
    const { p_name, category, p_desc, p_price, status, p_qty, rate, image } = req.body;
    

    if (!p_name || !category || !p_desc || !p_price || !status || !p_qty || !rate || !image) {
        console.log('Invalid input:', req.body);
        return res.status(400).send('Invalid Input');
    }

    try {
        const newProduct = {
            p_name,
            category, 
            p_desc,
            p_price,
            status,
            p_qty,
            rate,
            image
        };
        
        await productModel.insertOne(newProduct); 

        res.status(201).send('Product added successfully');
    } catch (err) {
        console.error('Failed to add product. Error:', err);
        res.status(500).send('Internal server error');
    }
};