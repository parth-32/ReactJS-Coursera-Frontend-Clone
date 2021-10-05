import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import LectureWeek from "./LectureWeek";
import "./lecture.scss";
import { api_getCourseById } from "../../helper/api_call.helper";
import Spinner from "../loader/Loader";

const Lecture = () => {
	const params = useParams();

	const [weekData, setWeekData] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchData(courseId) {
			return api_getCourseById(courseId);
		}

		fetchData(params.courseId).then((res) => {
			setWeekData(res.data.data);
			setIsLoading(false);
		});
	}, [params]);

	return (
		<React.Fragment>
			{isLoading && <Spinner open={isLoading} />}
			{!isLoading && (
				<section className="lectureWrapper">
					<div className="sidebar">
						<ul className="menu">
							{weekData.weeks.map((week, index) => {
								return (
									<li key={Math.random()}>
										<NavLink
											to={`/lecture/${params.courseId}/week/${week._id}`}
											activeClassName="activeLink"
										>
											Week {index + 1}
										</NavLink>
									</li>
								);
							})}
						</ul>
					</div>

					<LectureWeek
						weeks={weekData.weeks}
						offer_by={weekData.offer_by}
						title={weekData.title}
					/>
				</section>
			)}
		</React.Fragment>
	);
};

export default Lecture;
