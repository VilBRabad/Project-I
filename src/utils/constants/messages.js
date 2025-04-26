const messages = {
    FAILED_SERVER: "Failed to start sever",
}

const errors = {
    BAD_REQUEST: [
      400,
      "Invalid request: please verify your input and try again."
    ],
    UNAUTHORIZED: [
      401,
      "Authentication required: please log in and try again."
    ],
    FORBIDDEN: [
      403,
      "Access denied: you don’t have permission to perform this action."
    ],
    NOT_FOUND: [
      404,
      "Resource not found: the requested item does not exist."
    ],
    DATA_ALREADY_EXIST: [
      409,
      "Conflict: the resource you’re trying to create already exists."
    ],
    INTERNAL_ERROR: [
      500,
      "Server error: something went wrong. Please try again later."
    ],
    INVALIDATE_FIELDS: [
      400,
      "Required fields are missing"
    ]
  };
  

module.exports = { messages, errors };