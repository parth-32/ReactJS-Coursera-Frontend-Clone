import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./mainSlider.scss";

import { api_getCategory } from "../../helper/api_call.helper";

const MainSlider = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		api_getCategory().then((res) => setData(res.data.data));
	}, []);

	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					// initialSlide: 2
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
		],
	};
	return (
		<div className="topicSkillContainer">
			<h2>Explore Topics and Skills</h2>
			<Slider {...settings}>
				{data.length > 0 &&
					data.map((data) => {
						return (
							<div
								key={Math.random()}
								className="cardContainerMain"
							>
								<Link to={`/course?category=${data._id}`}>
									<img src={data.image} alt="ig" />
									<span>{data.name}</span>
								</Link>
							</div>
						);
					})}
			</Slider>
		</div>
	);
};

export default MainSlider;
