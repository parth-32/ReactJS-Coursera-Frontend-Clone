import React from "react";
import { Link } from "react-router-dom";
import "./courseItem.scss";
const CourseItem = (props) => {
	const { data, isEmpty, title } = props;

	return (
		<div className="myCourseBody">
			{!isEmpty && (
				<>
					<img
						className="coverImg"
						src={data?.course.thumbnail}
						alt="course"
					/>
					<div className="bodyInfo">
						<span className="offer_by">
							{data.course.type} | {data.course.offer_by}
						</span>
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
				</>
			)}
			{isEmpty && (
				<span className="emptySection">
					Your {title} course will display here.{" "}
				</span>
			)}
		</div>
	);
};

export default CourseItem;
