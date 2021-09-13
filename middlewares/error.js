const ErrorResponse = require("../utils/ErrorResponse");

const errorHandler = (err,req,res,next) => {
    
    let error = {...err};
   
    error.message = err.message;

    //Mongoose bad object Id
    if(err.name === "CastError") {
        const message = "Resource not found";
        error = new ErrorResponse(message,404);
    }

    //Mongoose duplicate key
    if(err.code === 11000) {
        const message = "Duplicate field value entered";
        error = new ErrorResponse(message,400);
    }

    //Mongoose Validation Error 
    if(err.name === "ValidationError") {
        const message = Object.values(err.errors).map((val) => val.message);
        error = new ErrorResponse(message,400);
    }

    res.status(error.statusCode || 500).json({
		success: false,
		error: error.message || 'Internal Server Error'
    });
    
}

module.exports = errorHandler;
