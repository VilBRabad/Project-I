const UserRepository = require("../repositories/user.repository.js");
const { CustomError } = require("../utils/customError.js");
const { errors } = require("../utils/constants/messages.js");

const registerUserService = async (data) => {
    const existsUser = await UserRepository.findByEmail(data?.email);

    if(existsUser){
        throw new CustomError(...errors.DATA_ALREADY_EXIST);
    }

    await UserRepository.createUser(data);
}


module.exports = {
    registerUserService,
}