const { ErrorResponse } = require("../utils/errorResponse.js");

const ValidateFields = (requiredFields = []) => {
    return (req, res, next) => {
        try {
            const missedFields = requiredFields.filter((field) => {
                const value = req.body[field];
                return value === undefined || value === null || value === "";
            });

            if(missedFields.length > 0) {
                return ErrorResponse.VALIDATION_ERROR(res, `Required fields are missing: ${missedFields.join(', ')}`);
            }

            next();
        } catch (error) {
            return ErrorResponse.VALIDATION_ERROR(res);
        }
    }
}

module.exports = { ValidateFields };