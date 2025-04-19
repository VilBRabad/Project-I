const { User } = require("../models");

const createUser = async (data, transaction = null) => {
    return await User.create(data, { transaction });
}

const findById = async (id) => {
    return await User.findOne({
        where: {
            id
        }
    });
};

const findByEmail = async (email) => {
    return await User.findOne({
        where: {
            email: email
        }
    });
};

const updateUser = async (id, updatedData, transaction) => {
    return await User.update(
        updatedData,
        {
            where: {
                id
            },
            transaction,
            returning: true
        }
    );
}

module.exports = {
    createUser,
    findById,
    findByEmail, 
    updateUser
}