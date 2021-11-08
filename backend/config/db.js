import mongoose from "mongoose";

const connectDB = async () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(`mongodb connected on ${con.connection.host}`);
    });
};

export default connectDB;
