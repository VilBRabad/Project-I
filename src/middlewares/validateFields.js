const { CustomError } = require("../utils/customError.js");

const ValidateFields = (requiredFields = []) => {
    return (req, res, next) => {
        const missedFields = requiredFields.filter((field) => {
            const value = req.body[field];
            return value === undefined || value === null || value === "";
        });

        if(missedFields.length > 0) {
            throw new CustomError(400, `Required fields are missing: ${missedFields.join(', ')}`);
        }

        next();
    }
}

module.exports = { ValidateFields };