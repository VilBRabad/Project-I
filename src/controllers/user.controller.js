const { ErrorResponse } = require("../utils/errorResponse.js");
const { SuccessReponse } = require("../utils/successResponse.js");
const { registerUserService } = require("../services/user.service.js");
const { CustomError } = require("../utils/customError");

const registerUser = async (req, res) => {
    try {
        const {firstName, lastName, email, password} = req.body;
        const data = {firstName, lastName, email, password};

        await registerUserService(data);

        return SuccessReponse(res, {}, 201);
    } catch (error) {
        if(error instanceof CustomError){
            return ErrorResponse.CUSTOM(res, error.statusCode, error.message);
        }
        return ErrorResponse.INTERNAL_SERVER_ERROR(res);
    }
}


module.exports = {
    registerUser,
}