import { ErrorResponse } from "../utils/errorResponse";

const validateFields = (requiredFields = []) => {
    return (req, res, next) => {
        const missedFields = requiredFields.filter(fields => !(fields in req.body));

        if (missedFields.length > 0) {
            return ErrorResponse.VALIDATION_ERROR(res, "All fields are required!");
        };

        next();
    }
}

export default validateFields;