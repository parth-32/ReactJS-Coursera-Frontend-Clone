import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./mainSlider.scss";
// import NavigateNextIcon from "@mui/icons-material/NavigateNext";

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

const getCardBG = (id) => {
	const arr = BC_IMAGES.filter((data) => data.id === id);
	return arr[0].bg;
};

const getCardTopic = (id) => {
	return id.split("_").join(" ");
};

const MainSlider = () => {
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
				<div className="cardContainerMain">
					<img src={getCardBG("data_science")} alt="ig" />
					<span>{getCardTopic("data_science")}</span>
				</div>
				<div className="cardContainerMain">
					<div className="subCard up">
						<img src={getCardBG("business")} alt="ig" />
						<span>{getCardTopic("business")}</span>
					</div>
					<div className="subCard down">
						<img src={getCardBG("computer_science")} alt="ig" />
						<span>{getCardTopic("computer_science")}</span>
					</div>
				</div>
				<div className="cardContainerMain">
					<div className="subCard up">
						<img src={getCardBG("personal_development")} alt="ig" />
						<span>{getCardTopic("personal_development")}</span>
					</div>
					<div className="subCard down">
						<img
							src={getCardBG("information_technology")}
							alt="ig"
						/>
						<span>{getCardTopic("information_technology")}</span>
					</div>
				</div>
				<div className="cardContainerMain">
					<div className="subCard up">
						<img src={getCardBG("health")} alt="ig" />
						<span>{getCardTopic("health")}</span>
					</div>
					<div className="subCard down">
						<img src={getCardBG("language_learning")} alt="ig" />
						<span>{getCardTopic("language_learning")}</span>
					</div>
				</div>
				<div className="cardContainerMain">
					<div className="subCard up">
						<img src={getCardBG("math_and_logic")} alt="ig" />
						<span>{getCardTopic("math_and_logic")}</span>
					</div>
					<div className="subCard down">
						<img src={getCardBG("social_science")} alt="ig" />
						<span>{getCardTopic("social_science")}</span>
					</div>
				</div>
				<div className="cardContainerMain">
					<div className="subCard up">
						<img src={getCardBG("physics")} alt="ig" />
						<span>{getCardTopic("physics")}</span>
					</div>
					<div className="subCard down">
						<img src={getCardBG("art")} alt="ig" />
						<span>{getCardTopic("art")}</span>
					</div>
				</div>
			</Slider>
		</div>
	);
};

export default MainSlider;
