import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./viyaMD.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">ViyaMD</div>
							<div className="work-subtitle">
								Machine Learning Intern
							</div>
							<div className="work-duration">May 2024 - August 2024</div>
						</div>

						<div className="work">
							<img
								src="./zoom.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Zoom Video Communications</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">July 2021 - December 2022</div>
						</div>
						<div className="work">
							<img
								src="./ibm.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">IBM</div>
							<div className="work-subtitle">
								Software Development Intern
							</div>
							<div className="work-duration">July 2020 - December 2020</div>
						</div>

					</div>

					
				}
			/>
		</div>
	);
};

export default Works;
