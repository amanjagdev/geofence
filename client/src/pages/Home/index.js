import React from "react";
import "./index.scss";
import mainGIF from "../../assets/main.gif";
import { useHistory } from "react-router";

const Home = () => {
	const history = useHistory();

	function handleClick() {
	  history.push("/signup");
	}
  
	return (
		<div className="Home">
			<div className="container">
				<div className="box">
					<div className="left">
						<div className="heading">GeoFence it like pro!</div>
						<div className="description">
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Voluptates atque amet ipsa corrupti excepturi
							nulla obcaecati tempora consectetur laborum quis!
						</div>
						<button className="cta" onClick={handleClick}>Get Started</button>
					</div>
					<div className="right">
						<img src={mainGIF} alt="scooter running" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
