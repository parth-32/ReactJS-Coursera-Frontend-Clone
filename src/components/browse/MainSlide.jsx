import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./mainSlider.scss";
// import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { api_getCategory } from "../../helper/api_call.helper";

// eslint-disable-next-line no-unused-vars
const BC_IMAGES = [
	{
		id: "data_science",
		bg: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/data_science.png",
	},
	{
		id: "business",
		bg: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/business.png",
	},
	{
		id: "computer_science",
		bg: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/computer_science.png",
	},
	{
		id: "personal_development",
		bg: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/personal_development.png",
	},
	{
		id: "information_technology",
		bg: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/information_technology.png",
	},
	{
		id: "health",
		bg: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/health.png",
	},
	{
		id: "language_learning",
		bg: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/language_learning.png",
	},
	{
		id: "math_and_logic",
		bg: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/business.png",
	},
	{
		id: "social_science",
		bg: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/business.png",
	},
	{
		id: "physics",
		bg: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/business.png",
	},
	{
		id: "art",
		bg: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/business.png",
	},
	{
		id: "language_learning",
		bg: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/business.png",
	},
];

const MainSlider = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function getData() {
			return await api_getCategory();
		}

		getData().then((data) => setData(data.data.data));
	}, []);
	console.log(data);
	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		// nextArrow: <SampleNextArrow />,
		// prevArrow: <SamplePrevArrow />,
	};
	return (
		<div className="topicSkillContainer">
			<h2>Explore Topics and Skills</h2>
			<Slider {...settings}>
				{data.length > 0 &&
					data.map((data) => {
						return (
							<div className="cardContainerMain">
								<Link to={`/course/${data._id}`}>
									<img src={data.image} alt="ig" />
									<span>{data.name}</span>
								</Link>
							</div>
						);
					})}
				{/* <div className="cardContainerMain">
					<Link to="/course/business">
						<div className="subCard up">
							<img src={getCardBG("business")} alt="ig" />
							<span>{getCardTopic("business")}</span>
						</div>
					</Link>
					<div className="subCard down">
						<img src={getCardBG("computer_science")} alt="ig" />
						<span>{getCardTopic("computer_science")}</span>
					</div>
				</div> */}
			</Slider>
		</div>
	);
};

export default MainSlider;
