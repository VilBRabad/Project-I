import User from "../models/user.model.js";
import ErrorResponse from "../utils/errorResponse.js";
import SuccessResponse from "../utils/successResponse.js";

const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        if (!firstName || !lastName || !email || !password) {
            return ErrorResponse(res, 402, "All fields required!");
        }

        const user = await User.create({
            firstName, lastName, email, password
        });

        console.log(user.toJSON());

        return SuccessResponse(res, 201, user);
    } catch (error) {
        console.log(error);
        return ErrorResponse(res, 500, "Server error!");
    }
}



export {
    registerUser,
}