// eslint-disable-next-line no-unused-vars
import React from "react";
import MainSlider from "../components/browse/MainSlide";
import PopularCourse from "../components/browse/PopularCourse";
import TopRated from "../components/browse/TopRated";

const BrowsePage = () => {
	return (
		<React.Fragment>
			<MainSlider />
			<PopularCourse />
			<TopRated />
		</React.Fragment>
	);
};

export default BrowsePage;
