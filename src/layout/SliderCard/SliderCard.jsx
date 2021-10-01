import React from "react";
import "./sliderCard.scss";
const SliderCard = (props) => {
	const { data } = props;
	return (
		<div className="cardContainer">
			<div className="cardImg">
				<img className="coverImg" src={data.cover_img} alt="" />
				<img src={data.logo} alt="" className="logo" />
			</div>
			<div className="cardBody">
				<span className="badge">{data.badge}</span>
				<p className="courseName">{data.title}</p>
				<p className="offerBy">{data.offer_by}</p>
				<span className="type">{data.type}</span>
			</div>
		</div>
	);
};

export default SliderCard;
