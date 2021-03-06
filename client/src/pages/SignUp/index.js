import React, { useState } from "react";
import Axios from "axios";
import "./index.scss";

const SignUp = ({ history }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [fullname, setFullName] = useState("");
	const [errors, setErrors] = useState(null);

	const handleSignUp = () => {
		Axios.post(`${process.env.REACT_APP_API_URL}/user/signup`, {
			name: fullname,
			email,
			password,
		})
			.then((res) => {
				console.log(res.data);
				history.push("/signin");
			})
			.catch((err) => {
				if (Array.isArray(err.response.data.errors)) {
					setErrors(err.response.data.errors);
				} else {
					setErrors([{ msg: err.response.data.error }]);
				}
			});
	};

	return (
		<div className="SignUp">
			<div className="main-signup">
				<h1>Sign Up</h1>
				<div className="signup-form">
					<label htmlFor="email">Email</label>
					<input
						type="text"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<label htmlFor="fullname">Full Name</label>
					<input
						type="text"
						id="fullname"
						value={fullname}
						onChange={(e) => setFullName(e.target.value)}
					/>

					<label htmlFor="pass">Password</label>
					<input
						type="password"
						id="pass"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button className="primary" onClick={() => handleSignUp()}>
						Sign Up
					</button>
				</div>
				{errors &&
					errors.map(({ msg }, index) => (
						<div key={index} className="error">
							{msg}
						</div>
					))}
			</div>
		</div>
	);
};

export default SignUp;
