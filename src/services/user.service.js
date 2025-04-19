import * as UserRepository from "../repositories/user.repository.js"
import { ERRORS } from "../utils/constants/messages.js";
import { CustomeError } from "../utils/customeError.js";
import bcrypt from "bcrypt";

export const registerUserService = async (data) => {
    const exists = await UserRepository.findByEmail(data.email);
    
    if(exists){
        throw new CustomeError(ERRORS.BAD_REQUEST);
    }

    return await UserRepository.createUser(data);
}


export const loginService = async (email, password) => {
    const user = await UserRepository.findByEmail(email);
    
    if(!user){
        throw new CustomeError(ERRORS.NOT_FOUND);
    }

    const isCorrectPassword = await bcrypt.compare()
    
}