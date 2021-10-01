import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./popularCourse.scss";
import SliderCard from "../../layout/SliderCard/SliderCard";

const PopularCourse = () => {
	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		// nextArrow: <SampleNextArrow />,
		// prevArrow: <SamplePrevArrow />,
	};

	const obj = {
		cover_img:
			"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/topics/ml/large-icon.png",
		logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/e8/7cc3d09d3f11e698dfff46d35f2da1/Stanford_Coursera_Logo.png",
		badge: "Free",
		title: "React JS Full Crash Course 2021",
		offer_by: "Uka Tarsadiya University",
		type: "course",
	};
	return (
		<section className="popularCourseContainer">
			<h2>Most Popular Courses</h2>
			<Slider {...settings}>
				{/* const data = {title, offer_by, logo, cover_img, type, badge} */}
				<SliderCard data={obj} />
				<SliderCard data={obj} />
				<SliderCard data={obj} />
				<SliderCard data={obj} />
				<SliderCard data={obj} />
				<SliderCard data={obj} />
				<SliderCard data={obj} />
			</Slider>
		</section>
	);
};

export default PopularCourse;
