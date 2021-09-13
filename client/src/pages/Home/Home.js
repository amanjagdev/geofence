import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

import "./Home.scss";

const Home = () => {
	return (
		<div className="Home">
			<div className="container">
				<NavBar />

				<Footer />
			</div>
		</div>
	);
};

export default Home;
