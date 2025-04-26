const { SuccessReponse } = require("../utils/successResponse.js");
const { registerUserService } = require("../services/user.service.js");

const registerUser = async (req, res) => {
    const {firstName, lastName, email, password} = req.body;
    const data = {firstName, lastName, email, password};

    await registerUserService(data);

    return SuccessReponse(res, {}, 201);
}


module.exports = {
    registerUser,
}