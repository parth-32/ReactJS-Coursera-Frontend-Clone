import React from "react";
import { Link } from "react-router-dom";
import "./courseItem.scss";
const CourseItem = (props) => {
	const { data } = props
	
	return (
		<div className="myCourseBody">
			<img
				className="coverImg"
				src={data.course.thumbnail}
				alt="course"
			/>
			<div className="bodyInfo">
				<span className="offer_by">{data.course.type} | {data.course.offer_by}</span>
				<span className="courseTitle">{data.course.title}</span>
			</div>
			<div className="gotoButton">
				<Link
					className="goToCourse"
					to={`/learn/${data.course._id}`}
				>
					Go to Course
				</Link>
			</div>
		</div>
	);
};

export default CourseItem;
