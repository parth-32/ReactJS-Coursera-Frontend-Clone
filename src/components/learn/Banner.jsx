import React from "react";
import { Star } from "@mui/icons-material";
import "./banner.scss";
import { useHistory } from "react-router-dom";

const Banner = (props) => {
	const { data } = props;

	const history = useHistory();
	const enrollCourseHandler = (e) => {
		e.preventDefault();

		// history.push(`/lecture/${data._id}`);
		history.push(`/lecture/${data._id}/week/${data.weeks[0]._id}`);
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
						Enroll for Free
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
