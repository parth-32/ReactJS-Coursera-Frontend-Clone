import {
	AccessTime,
	Language,
	SignalCellularAlt,
	SubtitlesOutlined,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import {
	api_enrollCourse,
	api_getCourseById,
	api_getEnrolledCourseStatus,
} from "../../helper/api_call.helper";
import Spinner from "../loader/Loader";
import Banner from "./Banner";
import "./learn.scss";

const Learn = () => {
	const params = useParams();

	const auth = useSelector((state) => state.auth);
	const history = useHistory();

	const [courseData, setCourseData] = useState([]);
	const [isEnrolled, setIsEnrolled] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		//Get Course
		api_getCourseById(params.course).then((res) => {
			setCourseData(res.data.data);

			//Get Enrolled Status for display on button
			auth.isAuthenticated &&
				api_getEnrolledCourseStatus(params.course).then((res) => {
					if (res.data.data) {
						setIsEnrolled(true);
					}
					setIsLoading(false);
				});
			setIsLoading(false);
		});
	}, [auth.isAuthenticated, params]);

	const enrollCourseHandler = (weekId) => {
		if (auth.isAuthenticated && !!auth.token) {
			// passing courseId
			api_enrollCourse(params.course)
				.then((res) => {
					history.push(`/lecture/${params.course}/week/${weekId}`);
				})
				.catch((e) => console.log("ENROLL_COURSE_ERROR ==== ", e));
		} else {
			history.push("/login");
		}
	};
	return (
		<>
			<Spinner open={isLoading} />
			{!isLoading && (
				<section className="learnWrapper">
					<Banner
						data={courseData}
						enrollStatus={isEnrolled}
						onEnrolling={enrollCourseHandler}
					/>
					<div className="courseDetails">
						<div className="leftPart">
							<h3 className="aboutCourseTitle">
								About this Course
							</h3>
							<p className="aboutCourseDetail">
								{courseData.overview}
							</p>

							<div className="skillWrapper">
								SKILLS YOU WILL GAIN
								<div className="skillGain">
									{courseData.skill_gain.map((skill) => {
										return (
											<span key={skill} className="skill">
												{skill}
											</span>
										);
									})}
								</div>
							</div>
						</div>
						<div className="rightPart">
							<div className="infoTag">
								<Language className="infoIcon" />
								<div className="infoDetail">
									<span className="infoTitle">
										100% online
									</span>
									<span className="infoCaption">
										Start instantly and learn at your own
										schedule.
									</span>
								</div>
							</div>
							<div className="infoTag">
								<AccessTime className="infoIcon" />
								<div className="infoDetail">
									<span className="infoTitle">
										Approx. 33 hours to complete
									</span>
									<span className="infoCaption"></span>
								</div>
							</div>
							<div className="infoTag">
								<SignalCellularAlt className="infoIcon" />
								<div className="infoDetail">
									<span className="infoTitle">
										{courseData.level} Level
									</span>
									<span className="infoCaption"></span>
								</div>
							</div>
							<div className="infoTag">
								<SubtitlesOutlined className="infoIcon" />
								<div className="infoDetail">
									<span className="infoTitle">English</span>
									<span className="infoCaption">
										Subtitles:{" "}
										{courseData.languages.join(", ")}
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="instructorWrapper">
						<h3 className="instructorHeading">Instructor</h3>
						<p className="instructorRating">
							Instructor rating 4.81/5 (6,405 Ratings)
						</p>
						<div className="instructorInfoWrapper">
							<img
								src="https://www.w3schools.com/howto/img_avatar.png"
								alt="avatar"
								className="instructorImg"
							/>
							<div className="instructorInfo">
								<h4 className="instructorName">
									{courseData.instructor}
								</h4>
								<p className="instructorProfession">
									Professor at {courseData.offer_by}
								</p>
								<span className="totalLearner">
									<b>1,154</b> Learners
								</span>
								<span className="totalCourse">
									<b>7</b> Courses
								</span>
							</div>
						</div>
					</div>
				</section>
			)}
		</>
	);
};

export default Learn;
