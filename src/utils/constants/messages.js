export const ERRORS = {
    FORBIDDEN: {
        statusCode: 403,
        message: "You are not allowed to access this resource.",
    },
    BAD_REQUEST: {
        statusCode: 400,
        message: "The request is invalid or malformed.",
    },
    UNAUTHORIZED: {
        statusCode: 401,
        message: "Authentication is required or has failed.",
    },
    NOT_FOUND: {
        statusCode: 404,
        message: "The requested data was not found.",
    },
    CONFLICT: {
        statusCode: 409,
        message: "A conflict occurred with the current state.",
    },
    INTERNAL_SERVER_ERROR: {
        statusCode: 500,
        message: "Something went wrong on the server.",
    },
    VALIDATION_ERROR: {
        statusCode: 422,
        message: "Input validation failed.",
    },
    RESOURCE_EXISTS: {
        statusCode: 409,
        message: "The resource already exists.",
    },
    INVALID_TOKEN: {
        statusCode: 401,
        message: "The token provided is invalid.",
    },
    TOKEN_EXPIRED: {
        statusCode: 401,
        message: "Your session has expired.",
    },
    RATE_LIMIT: {
        statusCode: 429,
        message: "Too many requests. Slow down.",
    },
    SERVICE_UNAVAILABLE: {
        statusCode: 503,
        message: "Service is temporarily unavailable.",
    },
    DATABASE_ERROR: {
        statusCode: 500,
        message: "A database error has occurred.",
    },
};
