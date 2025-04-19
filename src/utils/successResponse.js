const SuccessReponse = (res, data={}, statusCode=200) => {
    return res.status(statusCode).json({
        success: true,
        data,
        statusCode,
    })
}

module.exports = { SuccessReponse };