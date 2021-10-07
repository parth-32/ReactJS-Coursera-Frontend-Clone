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
		// nextArrow: <SampleNextArrow />,
		// prevArrow: <SamplePrevArrow />,
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
