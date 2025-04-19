export const ErrorResponse = {
    BAD_REQUEST: (res, message = "Bad Request") => {
        return res.status(400).json({
            success: false,
            message,
        });
    },

    UNAUTHORIZED: (res, message = "Unauthorized") => {
        return res.status(401).json({
            success: false,
            message,
        });
    },

    FORBIDDEN: (res, message = "Forbidden") => {
        return res.status(403).json({
            success: false,
            message,
        });
    },

    NOT_FOUND: (res, message = "Not Found") => {
        return res.status(404).json({
            success: false,
            message,
        });
    },

    CONFLICT: (res, message = "Conflict") => {
        return res.status(409).json({
            success: false,
            message,
        });
    },

    INTERNAL_SERVER_ERROR: (res, message = "Something went wrong on our end") => {
        return res.status(500).json({
            success: false,
            message,
        });
    },

    VALIDATION_ERROR: (res, message = "Validation Error") => {
        return res.status(422).json({
            success: false,
            message,
        });
    },

    CUSTOM: (res, statusCode = 440000, message = "Something went wrong") => {
        return res.status(statusCode).json({
            success: false,
            message,
        });
    }
};
