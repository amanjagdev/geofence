const jwt = require("jsonwebtoken");
const User = require("../models/Users");
const ErrorResponse = require("../utils/ErrorResponse");
const asyncHandler = require("./asyncHandler");
require('dotenv').config();

const secret = process.env.JWT_SECRET;

module.exports = asyncHandler(async (req,res,next) => {
    const {authorization} = req.headers;

    if(!authorization) {
        return next(
            new ErrorResponse("No headers provided",401)
        )
    }

    //Get the token from the authorization header
    const token = authorization.replace("Bearer ","");

    //Verifying the token from acessing the protected page
    const payload = await jwt.verify(token,secret);

    if(payload) {
        const {_id} = payload;
        const userData = await User.findById({
            _id
        })

        req.user = userData;
        console.log(req.user._id);

        next();
    }
    else {
        return next(
            new ErrorResponse("You must be logged in",401)
        )
    }

})
