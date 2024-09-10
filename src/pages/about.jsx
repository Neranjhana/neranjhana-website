import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>

								{/* Work Experience Section */}
								<div className="work-experience-section">
									<div className="title about-title">Work Experience</div>

									<div className="work-experience-item">
										<h3 className="subtitle about-subtitle">ViyaMD</h3>
										<p className="about-description">
											During my time at ViyaMD, I worked as a Machine Learning Intern, developing, fine-tuning, and validating large language models (LLMs) like RoBERTa-PM and BlueBert. I built data pipelines for medical data and contributed to the automation of medical coding systems.
										</p>
									</div>
									<div className="work-experience-item">
										<div className="work-experience-header">
											{/* <img
												src="./zoom.png"
												alt="Zoom Logo"
												className="company-logo"
											/> */}
											<h3 className="subtitle about-subtitle">Zoom</h3>
										</div>
										<p className="about-description">
										I was part of the Software Development Division of Security Monitoring and Logging team at Zoom. I developed applications for security use cases. I was a key contributor in building the Argus application, which uses open source tools to search on PetaBytes of data on AWS S3 and DynamoDB. I also worked with the Trust and Safety team to develop a Deep Learning model to predict potential abusers and Zoom Bombers on the platform.
										</p>
									</div>
									<div className="work-experience-item">
										<div className="work-experience-header">
											{/* <img
												src="./zoom.png"
												alt="Zoom Logo"
												className="company-logo"
											/> */}
											<h3 className="subtitle about-subtitle">IBM</h3>
										</div>
										<p className="about-description">
										I was part of the IBM's Sterling Supply Chain Business Network Hub (SCBN Hub) Team. Was involved in the migration of the SCBN Hub application data from DB2 to Couchbase. As a part of this, I worked closely with the team and developed document structures for the  NoSQL database based on the previous schema. I also made changes to the existing APIs to ensure seamless integration with the updated data format.
										</p>
									</div>

									{/* Add more work experiences here if needed */}
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
