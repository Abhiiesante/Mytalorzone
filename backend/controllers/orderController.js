import orderModel from '../models/orderModel.js';
import userModel from '../models/userModel.js';
{/*placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus*/ }
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;
        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, { cartData: {} });

        res.json({ message: 'Order placed successfully', success: true });
    } catch (error) {
        console.log(error);
        res.json({ message: error.message, success: false });
    }

}

const placeOrderStripe = async (req, res) => {

}

const placeOrderRazorpay = async (req, res) => {

}

const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ orders, success: true });
    } catch (error) {
        console.log(error);
        res.json({ message: error.message, success: false });
    }

}

const userOrders = async (req, res) => {
    try {
        const { userId } = req.body;
        const orders = await orderModel.find({ userId });
        res.json({ orders, success: true });
    } catch (error) {
        console.log(error);
        res.json({ message: error.message, success: false });
    }
}

const updateStatus = async (req, res) => {

}

export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus }