const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
	name: {
		type: String,
		required: true,
	},
	photo: {
		type: String,
	},
	email: {
		type: String,
		required: [true, "Please enter an email!"],
		match: [
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			"Please enter a valid email",
		],
	},
	password: {
		type: String,
		required: [true, "Please add a password"],
		min: [6, "Password should be of atleast 6 charachters"],
	},
	location: {
		type: String,
	},
});

const User = mongoose.model("User", userSchema);
module.exports = User;
