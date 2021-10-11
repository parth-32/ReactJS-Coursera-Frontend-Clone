import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./courseSlider.scss";
import SliderCard from "../../layout/SliderCard/SliderCard";
import { api_getQueryCourse } from "../../helper/api_call.helper";

const CourseSlider = (props) => {
	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	const [sliderData, setSliderData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [headingText, setHeadingText] = useState("");

	useEffect(() => {
		api_getQueryCourse(`?filter=${props.sliderFor}`).then((res) => {
			setSliderData(res.data.data);

			//set heading text
			if (props.sliderFor === "popular") {
				setHeadingText("Most Popular Courses");
			} else if (props.sliderFor === "top_rated") {
				setHeadingText("Top Rated Courses");
			} else if (props.sliderFor === "recent") {
				setHeadingText("Recently Uploaded Courses");
			}
			setIsLoading(false);
		});
	}, [props.sliderFor]);

	return (
		<section className="CourseSliderContainer">
			<h2>{headingText}</h2>
			<Slider {...settings}>
				{/* const data = {title, offer_by, logo, cover_img, type, badge} */}
				{!isLoading &&
					sliderData.map((data) => {
						return <SliderCard key={data._id} data={data} />;
					})}
			</Slider>
		</section>
	);
};

export default CourseSlider;
