import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(cors());
import errorMiddleware from "./middlewares/errors.js";

// Import All routes
import products from "./routes/product.js";
import auth from "./routes/auth.js";
import order from "./routes/order.js";

app.use(express.json({ extended: false }));
app.use(cookieParser());
app.use(urlencoded({ extended: true }));

app.use("/api/v1", products);
app.use("/api/v1", auth);
app.use("/api/v1", order);

// Middleware to Handle errors
app.use(errorMiddleware);

export default app;
