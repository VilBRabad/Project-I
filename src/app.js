import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.json());
app.use(cookieParser())

// API Routes
import userRouter from "./routes/user.route.js";

app.use("/api/v1/auth", userRouter);



export { app };