const SuccessReponse = (res, statusCode, data) => {
    return res.status(statusCode).json({
        success: true,
        data,
        statusCode,
    })
}

export default SuccessReponse;