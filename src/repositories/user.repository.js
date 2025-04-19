import User from "../models/user.model.js";

export const createUser = async (payload, transaction = null) => {
    return await User.create(payload, { transaction });
};

export const findById = async (id) => {
    return await User.findOne({ 
        where: {
            id
        }
    });
};

export const findByEmail = async (email) => {
    return await User.findOne({
        where: {
            email
        }
    });
};

export const updateUser = async (id, updatedData, transaction=null) => {
    return await User.update(updatedData, {
        where: { id },
        returning: true
    }, {transaction});
};
