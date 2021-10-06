import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { api_getUserEnrolledCourse } from "../../helper/api_call.helper";
// import Spinner from "../loader/Loader";
import CourseItem from "./CourseItem";
import "./myCourse.scss";

const MyCourse = (props) => {
	const [courseData, setCourseData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		api_getUserEnrolledCourse().then((res) => {
			var result = res.data.data;
			var updated;
			if (props.type === "in_progress") {
				updated = result.filter((data) => {
					return data.week_status.some(
						(status) => status.finished === false
					);
				});
			} else if (props.type === "completed") {
				updated = result.filter((data) => {
					return data.week_status.every(
						(status) => status.finished === true
					);
				});
			} else if (props.type === "enrolled") {
				updated = result;
			}

			setCourseData(updated);
			setIsLoading(false);
		});
	}, [props.type]);
	return (
		<section className="myCourseWrapper">
			<div className="myCourseGreeting">Welcome Back!</div>
			<div className="myCourseStatus">
				<NavLink
					className="statusLink"
					activeClassName="statusActive"
					to="/my_course"
				>
					Enrolled
				</NavLink>
				<NavLink
					className="statusLink"
					activeClassName="statusActive"
					to="/in_progress"
				>
					In Progress
				</NavLink>
				<NavLink
					className="statusLink"
					activeClassName="statusActive"
					to="/completed"
				>
					Completed
				</NavLink>
			</div>
			<div className="myCourseBodyWrapper">
				{/* {isLoading && <Spinner open={isLoading} />} */}
				{!isLoading &&
					courseData.map((data) => {
						return <CourseItem title={props.type} data={data} />;
					})}
			</div>
		</section>
	);
};

export default MyCourse;
