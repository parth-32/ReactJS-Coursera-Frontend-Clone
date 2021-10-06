import React from "react";
import MyCourse from "../components/my_course/MyCourse";

const MyCoursePage = (props) => {
	return (
		<React.Fragment>
			<MyCourse type={props.type} />
		</React.Fragment>
	);
};

export default MyCoursePage;
