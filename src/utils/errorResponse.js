const ErrorResponse = {
    INTERNAL_SERVER_ERROR: (res, message = "Internal server error") => {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message,
        });
    },

    VALIDATION_ERROR: (res, message = "Validation Error") => {
        return res.status(422).json({
            success: false,
            message,
        });
    },

    CUSTOM: (res, statusCode=400, message="Something went wrong!") => {
        return res.status(statusCode).json({
            success: false,
            statusCode,
            message
        })
    }
}

module.exports = { ErrorResponse };