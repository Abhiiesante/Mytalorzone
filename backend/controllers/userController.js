import userModel from '../models/userModel.js';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
}

//user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ message: 'User does not exist', success: false });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = createToken(user._id);
            res.json({ user: user._id, token, success: true });
        }
        else {
            res.json({ message: 'Invalid credentials', success: false });
        }
    } catch (error) {
        res.json({ message: error.message, success: false });
    }
}

//user register
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ message: 'User already exists', success: false });
        }
        if (!validator.isEmail(email)) {
            return res.json({ message: 'Invalid email', success: false });
        }
        if (password.length < 6) {
            return res.json({ message: 'Please enter a strong password', success: false });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({ name, email, password: hashedPassword });
        const user = await newUser.save();

        const token = createToken(user._id);
        res.json({ user: user._id, token, success: true });


    } catch (error) {
        res.json({ message: error.message, success: false });
    }
}

//admin login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET);
            res.json({ token, success: true });
        }
        else {
            res.json({ message: 'Invalid Credentials', success: false });
        }
    } catch (error) {
        res.json({ message: error.message, success: false });
    }
}

export { loginUser, registerUser, adminLogin };