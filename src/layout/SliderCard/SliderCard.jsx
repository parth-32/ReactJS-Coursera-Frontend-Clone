import React from "react";
import { Link } from "react-router-dom";
import "./sliderCard.scss";
const SliderCard = (props) => {
	const logo = "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/e8/7cc3d09d3f11e698dfff46d35f2da1/Stanford_Coursera_Logo.png"
	// const badge = "Free"
	const { data } = props;
	return (
		<div className="cardContainer">
			<div className="cardImg">
				<img className="coverImg" src={data.thumbnail} alt="" />
				<img src={logo} alt="" className="logo" />
			</div>
			<div className="cardBody">
				{/* <span className="badge">{data.badge}</span> */}
				<p  className="courseName"><Link to={`/learn/${data._id}`}>{data.title}</Link></p>
				<p className="offerBy">{data.offer_by}</p>
				<span className="type">{data.type}</span>
			</div>
		</div>
	);
};

export default SliderCard;
