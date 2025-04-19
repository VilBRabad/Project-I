import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import validateFields from "../middlewares/validateFields.js";

const router = Router();

router.post(
    "/register",
    validateFields(["firstName", "lastName", "email", "password"]),
    registerUser
);

export default router;