import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODBURL);
    if (connect) {
      console.log("DATABASE IS CONNECTED!");
    }
  } catch (error) {
    console.log(`ERROR :${error.message}`);
  }
};

export default connectDB;
