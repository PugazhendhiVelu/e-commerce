const path = require('path');
const customerModel = require(path.join(__dirname, '..', 'models', 'customer'));

exports.createUser = async (req, res) => {
    const { username, email, password, doornumber, phno, street, city, state, pincode } = req.body;
    try {
        const existingUser = await customerModel.findOne({ email });
        if (existingUser) {
            return res.json('existed');
        } else {
            await customerModel.create({
                username,
                email,
                password,
                phno,
                doornumber,
                street,
                city,
                state,
                pincode
            });
            return res.status(200).json('accepted');
        }
    } catch (err) {
        console.error('Error during registration:', err);
        res.status(500).send('Internal server error');
    }
};
