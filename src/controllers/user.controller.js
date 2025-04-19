import { registerUserService } from "../services/user.service.js";
import { CustomeError } from "../utils/customeError.js";
import { ErrorResponse } from "../utils/errorResponse.js";
import SuccessResponse from "../utils/successResponse.js";

const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const data = { firstName, lastName, email, password };

        const user = await registerUserService(data);

        return SuccessResponse(res, 201, user);
    } catch (error) {
        if(error instanceof CustomeError){
            return ErrorResponse.CUSTOM(res, error.statusCode, error.message);
        }
        return ErrorResponse.INTERNAL_SERVER_ERROR(res);
    }
}



export {
    registerUser,
}