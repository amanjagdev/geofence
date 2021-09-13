import React, { useState } from "react";
import Axios from "axios";
import { useRecoilState } from "recoil";
import { userAtom, tokenAtom } from "../../global/globalState";
import "./index.scss";

const Login = ({ history }) => {
	const [email, setEmail] = useState("");
	const [, setUser] = useRecoilState(userAtom);
	const [, setToken] = useRecoilState(tokenAtom);
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState(null);
	const [selected, setSelected] = useState("user");

	const apiUrl = process.env.REACT_APP_API_URL;

	const handleLoginUser = () => {
		Axios.post(`${apiUrl}/user/signin`, {
			email,
			password,
		})
			.then((res) => {
				if (res.data.error) {
					setErrors([{ msg: res.data.error }]);
				} else {
					localStorage.setItem(
						"user",
						JSON.stringify(res.data.response.user)
					);
					localStorage.setItem("token", res.data.response.token);
					setUser(res.data.response.user);
					setToken(res.data.response.token);
					history.push("/dashboard");
				}
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
		<div className="Login">
			<div className="main-login">
				<h1>Login</h1>
				<div className="login-form">
					<label htmlFor="email">Email</label>
					<input
						type="text"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<label htmlFor="pass">Password</label>
					<input
						type="password"
						id="pass"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						className="primary"
						onClick={() => handleLoginUser()}>
						Log In
					</button>
				</div>
				<div className="error-container">
					{errors &&
						errors.map(({ msg }, index) => (
							<div key={index} className="error">
								{msg}
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default Login;