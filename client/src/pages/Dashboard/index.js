import React, { useState } from "react";
import "./index.scss";

import peopleIcon from "../../assets/people.svg";
import mapIcon from "../../assets/map.svg";
import alertIcon from "../../assets/alert.svg";

import img0 from "../../assets/jugad0.png";
import img1 from "../../assets/jugad1.png";
import img2 from "../../assets/jugad2.png";
import img3 from "../../assets/jugad3.png";

const Dashboard = () => {
	const mapImage = [img0, img1, img2, img3];
	const people = [
		{
			name: "Kartik Goel",
			address: "43, Mount Abu, North Carolina, South America",
			alert: false,
		},
		{
			name: "Kartik Goel",
			address: "43, Mount Abu, North Carolina, South America",
			alert: false,
		},
		{
			name: "Ramesh",
			address: "43, Mount Abu, North Carolina, South America",
			alert: true,
		},
		{
			name: "Kartik Goel",
			address: "43, Mount Abu, North Carolina, South America",
			alert: false,
		},
	];
	const [selected, setSelected] = useState(0);

	return (
		<div className="Dashboard">
			<div className="container">
				<div className="people-container">
					<div className="heading">
						<img src={peopleIcon} alt="map" />
						<div className="text">People</div>
					</div>
					<div className="people-cards">
						{people.map(({ name, address, alert }, index) => (
							<div
								onClick={() => setSelected(index)}
								className={`people-card ${alert && "alert"} ${
									selected === index && "people-selected"
								}`}
								key={index}>
								<div className="name">{name}</div>
								{alert && selected !== index ? (
									<div className="alert-message">
										<div>Going out of bounds</div>
										<img
											src={alertIcon}
											alt="alert"
											className="alert-icon"
										/>
									</div>
								) : (
									<div className="address">{address}</div>
								)}
							</div>
						))}
					</div>
				</div>
				<div className="map">
					<div className="heading">
						<img src={mapIcon} alt="map" />
						<div className="text">Map Area</div>
					</div>
					<img
						src={mapImage[selected]}
						className="map-image"
						alt="sorry for this, replace this with an actual map"
					/>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
