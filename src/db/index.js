import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    let connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );

    console.log(
      "mongodb connected instance :",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("Mongo DB connection failed :", error);
    process.exit(1);
  }
};

export default connectDB;
