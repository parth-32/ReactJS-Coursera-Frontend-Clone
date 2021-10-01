import React from "react";
import { Star } from "@mui/icons-material";
import "./banner.scss";

const Banner = () => {
	return (
		<div className="banner">
			<div className="bannerBody">
				<span className="bannerTitle">Financial Markets</span>
				<div className="ratingInfo">
					<span className="ratingTotal">4.8</span>
					<Star className="ratingStar" />
					<Star className="ratingStar" />
					<Star className="ratingStar" />
					<Star className="ratingStar" />
					<Star className="ratingStar" />
					<span className="ratedBy">1,321 ratings</span>
				</div>
				<p className="enrolledBy">
					<b>1,045,182</b> already enrolled
				</p>
				<p className="instructor">
					<b>Instructor(s):</b> Robert Shiller
				</p>
				<p className="subTitles">
					<b>Subtitles:</b> English, Arabic, French, Portuguese
					(European), Italian, Portuguese (Brazilian), Vietnamese,
					Korean, German, Russian, Spanish, Japanese
				</p>
				<div className="bannerBtn">
					<button className="enrollForFreeBtn">
						Enroll for Free
					</button>
				</div>
			</div>
			<div className="bannerOfferBy">
				<span className="offerByText">Offered by</span>
				<span className="bannerUniversity">Google</span>
			</div>
		</div>
	);
};

export default Banner;
