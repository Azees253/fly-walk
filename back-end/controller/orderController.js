import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// const placeOrder = async (req, res) => {
//   const front_url = "http://localhost:5173/";
//   try {
//     const newOrder = new orderModel({
//       userId: req.body.userId,
//       items: req.body.items,
//       amount: req.body.amount,
//       address: req.body.address,
//     });
//     await newOrder.save();
//     await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

//     const line_items = req.body.items.map((item) => ({
//       price_data: {
//         currency: "inr",
//         product_data: {
//           name: item.name,
//         },
//         unit_amount: item.price * 100 * 80,
//       },
//       quantity: item.quantity,
//     }));

//     line_items.push({
//       price_data: {
//         currency: "inr",
//         product_data: {
//           name: "Delivery Charges",
//         },
//         unit_amount: 2 * 100 * 80,
//       },
//       quantity: 1,
//     });
//     const session = await paymentProvider.create({
//       line_items: line_items,
//       success_url: `${process.env.front_url}/verify?success=true&orderId=${newOrder._id}`,
//       cancel_url: `${process.env.front_url}/verify?success=false&orderId=${newOrder._id}`,
//     });
//     res.json({ success: true, session_url: session.url });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

const placeOrder = async (req, res) => {
  try {
    // Calculate total amount from items
    const itemsTotal = req.body.items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    // Add delivery charges
    const deliveryCharges = 2;
    const totalAmount = itemsTotal + deliveryCharges;

    // Create new order in database
    const newOrder = new orderModel({
      userId: req.body._id, // Make sure to pass userId from frontend
      items: req.body.items,
      amount: totalAmount,
      address: req.body.address, // Make sure to pass address from frontend
      status: "Processing This Items", // Initial status for COD orders
      date: Date.now(),
      payment: false, // COD - payment not received yet
      paymentMethod: "COD",
    });

    // Save order to database
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body._id, { cartData: {} });

    // Send success response
    res.json({
      success: true,
      message: "Order placed successfully",
      orderId: newOrder._id,
      totalAmount: totalAmount,
    });
  } catch (error) {
    console.log("Error creating order:", error);
    res.json({
      success: false,
      message: "Error placing order",
    });
  }
};

const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body._id });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//  Listing order for admin panel

const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// api for  updating order status
const updateStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, {
      status: req.body.status,
    });
    res.json({ success: true, message: "Status Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { placeOrder, userOrders, listOrders, updateStatus };
