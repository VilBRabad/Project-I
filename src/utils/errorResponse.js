const ErrorResponse = (res, statusCode, message) => {
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    });
};

export default ErrorResponse;
