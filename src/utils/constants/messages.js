const messages = {
    FAILED_SERVER: "Failed to start sever",
}

const errors = {
    BAD_REQUEST: [400, "Bad Request"],
    UNAUTHORIZED: [401, "Unauthorized"],
    FORBIDDEN: [403, "Forbidden"],
    NOT_FOUND: [404, "Resource not found"],
    DATA_ALREADY_EXIST: [409, "Data already exists"],
    INTERNAL_ERROR: [500, "Internal Server Error"],
};


module.exports = { messages, errors };