const User = require('../../models/user');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const data = req.body;

    try {
        const user = await User.findOne({ 'email': data.email });

        if (!user) return res.status(200).json({ success: false });

        if (data.password === user.password && user.admin) {
            const token = jwt.sign({ email: user.email }, 'admin4123');

            return res.status(200).json({ success: true, token });
        } else {
            return res.status(200).json({ success: false });
        } 

    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false });   
    }
};

const addUser = async (req, res) => {
    const data  = req.body;
    const user = await User.findOne({ 'email': data.email });

    console.log(user)

    if (user) return res.status(200).json({ success: false });

    User.create(data);
    
    return res.status(200).json({ success: true });
}

module.exports = {
    addUser,
    login,
};