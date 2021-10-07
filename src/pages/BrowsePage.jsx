// eslint-disable-next-line no-unused-vars
import React from "react";
import MainSlider from "../components/browse/MainSlide";
import CourseSlider from "../components/browse/CourseSlider";

const BrowsePage = () => {
	return (
		<React.Fragment>
			<MainSlider />
			<CourseSlider sliderFor="top_rated" />
			<CourseSlider sliderFor="popular" />
			<CourseSlider sliderFor="recent" />
		</React.Fragment>
	);
};

export default BrowsePage;
