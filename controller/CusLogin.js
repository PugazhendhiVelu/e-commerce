const path = require('path');
const customerModel = require(path.join(__dirname, '..', 'models', 'customer'));

exports.userlogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await customerModel.findOne({ email });
        if (user) {
            if (user.password === password) {
                return res.json(user.username);     //returns the username
            } else {
                return res.json('Username or passsword mismatch');
            }
        } else {
            return res.json('User not exist');
        }
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).send('Internal server error');
    }
};
