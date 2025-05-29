import mongoose from "mongoose";

export const connectDb = async () => {
  await mongoose
    .connect(
      "mongodb+srv://azees253:14113380@cluster0.afqgxo8.mongodb.net/fly-walk"
    )
    .then(() => console.log("DB connected"));
};
