import React from "react";
import "./NavBar.scss";

const NavBar = () => {
	return (
		<div className="NavBar">
			<nav>
				<figure>GeoFence</figure>
				<div className="nav-links">
					<div className="nav-link nav-link-active">Login</div>
					<div className="nav-link nav-link-active">Signup</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
