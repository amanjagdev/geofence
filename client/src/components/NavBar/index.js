import React from "react";
import "./index.scss";
import logo from "../../assets/logo.svg";
import { useHistory } from "react-router";
import { userAtom, tokenAtom } from "../../global/globalState";
import { useRecoilState } from "recoil";

const NavBar = () => {
	const history = useHistory();
	const [user, setUser] = useRecoilState(userAtom);
	const [, setToken] = useRecoilState(tokenAtom);

	const logOut = () => {
		history.push("/");
		setUser(null);
		setToken(null);
		localStorage.removeItem("user");
		localStorage.removeItem("token");
	};

	return (
		<div className="NavBar">
			<nav>
				<figure onClick={() => history.push("/")}>
					<img src={logo} alt="GeoFence" />
					<figcaption>GeoFence</figcaption>
				</figure>

				{user ? (
					<div className="nav-links">
						<div
							className="nav-link"
							onClick={() => {
								history.push("/dashboard");
							}}>
							{user.name}
						</div>
						<div className="nav-link" onClick={() => logOut()}>
							Logout
						</div>
					</div>
				) : (
					<div className="nav-links">
						<div
							className="nav-link"
							onClick={() => history.push("/signin")}>
							Login
						</div>
						<div
							className="nav-link"
							onClick={() => history.push("/signup")}>
							Signup
						</div>
					</div>
				)}
			</nav>
		</div>
	);
};

export default NavBar;
