function errorHandler (err, req, res, next) {
    const {code, message, name, sequelize} = err

    if (name === "SequelizeUniqueConstraintError" || name === "SequelizeValidationError") {
        const arr = []
        sequelize.forEach(el => {
            arr.push(el.message)
        });
        
        res.status(code).json({code, message: arr})
    }
    else if (code === 400) {
        res.status(code).json({code, message: message || "Bad Requests"})
    }
    else if (code === 401) {
        res.status(code).json({code, message: message || "Unauthorized"})
    }
    else if (code === 403) {
        res.status(code).json({code, message: message || "Access Forbidden"})
    }
    else if (code === 404) {
        res.status(code).json({code, message: message || "Not Found"})
    }
    else {  // 500
        res.status(code).json({code, message: message || "Internal Server Error"})
    }
}

module.exports = errorHandler