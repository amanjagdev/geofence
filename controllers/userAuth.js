const User = require("../models/Users");
const ErrorResponse = require("../utils/ErrorResponse");
const bcrypt = require("bcrypt");
const asyncHandler = require("../middlewares/asyncHandler");
const sendResponse = require("../utils/sendResponse");
const jwt = require("jsonwebtoken");

// @desc register user
// @route POST /signup
// @access PUBLIC

module.exports.signup = asyncHandler(async (req, res, next) => {
	const { name, email, password } = req.body;

	//Checking if the user is already registered
	const user = await User.findOne({ email });

	if (user) {
		return next(
			new ErrorResponse("User with that email already exists", 400)
		);
	}

	//If not , then save the user
	const hashedPass = await bcrypt.hash(password, 10);

	const newUser = new User({
		name,
		email,
		password: hashedPass,
	});

	const savedUser = await newUser.save();

	sendResponse(savedUser, "User registered Successfully", res);
});

// @desc login user
// @route POST /signin
// @access PUBLIC

module.exports.signin = asyncHandler(async (req, res, next) => {
	const { email, password } = req.body;
	const secret = process.env.JWT_SECRET;

	//Checking if users has registered or not
	const user = await User.findOne({ email });

	if (!user) {
		return next(new ErrorResponse("User is not registered", 400));
	}

	const isMatch = await bcrypt.compare(password, user.password);

	if (isMatch) {
		const token = jwt.sign(
			{
				_id: user._id,
			},
			secret
		);

		sendResponse({ token, user }, "User registered Successfully", res);
	} else {
		return next(new ErrorResponse("Sorry, Incorrect Email/Password", 400));
	}
});

// @desc dashboard
// @route GET /dashboard
// @access Private

module.exports.dashboard = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);
	sendResponse(user, "Protected Page", res);
});
