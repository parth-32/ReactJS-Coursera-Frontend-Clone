import React from "react";
import { Star } from "@mui/icons-material";
import "./banner.scss";


const Banner = (props) => {
	const { data } = props;

	

	//Enrolling Course
	const enrollCourseHandler = (e) => {
		e.preventDefault();
		props.onEnrolling(data.weeks[0]._id);
	};
	return (
		<div className="banner">
			<div className="bannerBody">
				<span className="bannerTitle">{data.title}</span>
				<div className="ratingInfo">
					<span className="ratingTotal">{data.rating}</span>
					<Star className="ratingStar" />
					<Star className="ratingStar" />
					<Star className="ratingStar" />
					<Star className="ratingStar" />
					<Star className="ratingStar" />
					<span className="ratedBy">
						{data.rated_by.length} ratings
					</span>
				</div>
				<p className="enrolledBy">
					<b>{data.enroll_count}</b> already enrolled
				</p>
				<p className="instructor">
					<b>Instructor(s):</b> {data.instructor}
				</p>
				<p className="subTitles">
					<b>Subtitles:</b> {data.languages.join(", ")}
				</p>
				<div className="bannerBtn">
					<button
						className="enrollForFreeBtn"
						onClick={enrollCourseHandler}
					>
						{props.enrollStatus && "Continue Course"}
						{!props.enrollStatus && "Enroll for Free"}
					</button>
				</div>
			</div>
			<div className="bannerOfferBy">
				<span className="offerByText">Offered by</span>
				<span className="bannerUniversity">{data.offer_by}</span>
			</div>
		</div>
	);
};

export default Banner;
