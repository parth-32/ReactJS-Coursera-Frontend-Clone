import React, { useState, useRef } from "react";
import "./footer.scss";
import {
	// Close,
	Facebook,
	Instagram,
	LinkedIn,
	Twitter,
	YouTube,
} from "@mui/icons-material";
import { api_verifyCertificate } from "../../helper/api_call.helper";
import Alerts from "../alert/Alerts";

const Footer = () => {
	const [verificationResult, setVerificationResult] = useState(null);
	const [isOpen, setIsOpen] = useState(false);
	const [isError, setError] = useState(false);
	const verifyRef = useRef();

	const verificationHandler = (e) => {
		e.preventDefault();
		const refId = verifyRef.current.value;
		api_verifyCertificate(refId)
			.then((res) => {
				setVerificationResult(res.data.data);
				setIsOpen(true);
			})
			.catch((e) => {
				setError(true);
				setError(false);
			});
	};
	return (
		<React.Fragment>
			{isError && <Alerts message="Enter Valid Ref. ID" type="error" />}
			{isOpen && (
				<div
					className="verifyModalContainer"
					onClick={() => setIsOpen((state) => !state)}
				>
					<div className="verifyBox">
						<div className="verifyHeader">
							<span className="Heading">
								Certificate Verification
							</span>
						</div>
						<div className="verifyBody">
							<span className="verification">
								<span className="verificationName">
									Issued to:{" "}
								</span>
								<span
									className={`verificationStatus ${
										verificationResult.status === "verified"
											? "verified"
											: "unverified"
									}`}
								>
									{verificationResult.user.name}
								</span>
							</span>
							<span className="verification">
								<span className="verificationName">
									Issued Date:
								</span>
								<span
									className={`verificationStatus ${
										verificationResult.status === "verified"
											? "verified"
											: "unverified"
									}`}
								>
									{verificationResult.status === "verified"
										? new Date(verificationResult.updatedAt)
												.toString()
												.split("GMT")[0] + " IST"
										: "-"}
								</span>
							</span>
							<span className="verification">
								<span className="verificationName">
									Course:
								</span>
								<span
									className={`verificationStatus ${
										verificationResult.status === "verified"
											? "verified"
											: "unverified"
									}`}
								>
									{verificationResult.course.title}
								</span>
							</span>
							<span className="verification">
								<span className="verificationName">
									Issued By:
								</span>
								<span
									className={`verificationStatus ${
										verificationResult.status === "verified"
											? "verified"
											: "unverified"
									}`}
								>
									{verificationResult.status === "verified"
										? "Coursera"
										: "-"}
								</span>
							</span>
							<span className="verification">
								<span className="verificationName">Status</span>
								<span
									className={`verificationStatus ${
										verificationResult.status === "verified"
											? "verified"
											: "unverified"
									}`}
								>
									{verificationResult.status}
								</span>
							</span>
						</div>
					</div>
				</div>
			)}
			<footer className="footerContainer">
				<div className="footerWrapper">
					<div className="footerCol">
						<span className="footerHeading">Coursera</span>
						<div className="footerColBody">
							<span className="footerColBodyText">About</span>
							<span className="footerColBodyText">Careers</span>
							<span className="footerColBodyText">
								What we offers
							</span>
							<span className="footerColBodyText">
								For Enterprise
							</span>
							<span className="footerColBodyText">
								For Campus
							</span>
						</div>
					</div>

					<div className="footerCol">
						<span className="footerHeading">Community</span>
						<div className="footerColBody">
							<span className="footerColBodyText">Learners</span>
							<span className="footerColBodyText">Partners</span>
							<span className="footerColBodyText">
								Developers
							</span>
							<span className="footerColBodyText">Blog</span>
						</div>
					</div>
					<div className="footerCol">
						<span className="footerHeading">More</span>
						<div className="footerColBody">
							<span className="footerColBodyText">Press</span>
							<span className="footerColBodyText">Investors</span>
							<span className="footerColBodyText">Terms</span>
							<span className="footerColBodyText">Privacy</span>
							<span className="footerColBodyText">Help</span>
						</div>
					</div>
					<div className="footerCol">
						<span className="footerHeading">Mobile App</span>
						<div className="footerColBody">
							<img
								className="getItOn"
								src="https://d3njjcbhbojbot.cloudfront.net/web/images/icons/download_on_the_app_store_badge_en.svg"
								alt="Download on the App Store"
								height="45"
							/>

							<img
								src="https://d3njjcbhbojbot.cloudfront.net/web/images/icons/en_generic_rgb_wo_45.png"
								alt="Get it on Google Play"
								height="45"
								className="getItOn"
							/>
							<div className="verificationWrapper">
								<input
									type="text"
									className="verification"
									placeholder="Enter Ref. ID"
									ref={verifyRef}
									required
								/>
								<button
									className="verifyBtn"
									onClick={verificationHandler}
								>
									Verify
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="copyrightWrapper">
					© 2021. All rights reserved.
					<div className="followOn">
						<Facebook className="followIcon" />
						<LinkedIn className="followIcon" />
						<Twitter className="followIcon" />
						<YouTube className="followIcon" />
						<Instagram className="followIcon" />
					</div>
				</div>
			</footer>
		</React.Fragment>
	);
};

export default Footer;
