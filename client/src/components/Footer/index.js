import React from "react";
import "./index.scss";

import { FaCopyright } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="Footer">
			<div className="copy">
				<FaCopyright id="copy-icon" color="#00B341" size="1rem" />
				<span>
					All Rights Reserved | GeoFence | {new Date().getFullYear()}
				</span>
			</div>
		</div>
	);
};

export default Footer;
