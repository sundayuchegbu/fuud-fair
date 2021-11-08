import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config({ path: "backend/config/config.env" });

// Handle the Uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.stack}`);
  console.log("Shutting down due to uncaught exception");
  process.exit(1);
});

// connecting to database
connectDB();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `server connected on PORT: ${process.env.port} in ${process.env.NODE_ENV} mode`
  );
});

//  Handle Unhandled Promise Rejection

process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err.stack}`);
  console.log("Shutting down the server due to Unhandled promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
