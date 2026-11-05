const errorMiddleware = (error, req, res, next) => {
    console.error(error)

    res.status(error.statusCode || 500).json({
        status: 'error',
        data: [],
        message: error.message
    })
}

module.exports = errorMiddleware
