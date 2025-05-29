import express from "express";
import cors from "cors";
import { connectDb } from "./config/dp.js";
import collectionRouter from "./router/collectionRoute.js";
import "dotenv/config";
import userRouter from "./router/userRoute.js";
import cartRouter from "./router/cartRoute.js";
import orderRouter from "./router/orderRoute.js";

// config

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

// db connection
connectDb();

// routes
app.use("/api/collection", collectionRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API IS WORKING");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost: ${PORT}`);
});
