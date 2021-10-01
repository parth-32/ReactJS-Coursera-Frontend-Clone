import {
	AccessTime,
	Language,
	SignalCellularAlt,
	SubtitlesOutlined,
} from "@mui/icons-material";
import React from "react";
import Banner from "./Banner";
import "./learn.scss";

const Learn = () => {
	return (
		<section className="learnWrapper">
			<Banner />
			<div className="courseDetails">
				<div className="leftPart">
					<h3 className="aboutCourseTitle">About this Course</h3>
					<p className="aboutCourseDetail">
						An overview of the ideas, methods, and institutions that
						permit human society to manage risks and foster
						enterprise. Emphasis on financially-savvy leadership
						skills. Description of practices today and analysis of
						prospects for the future. Introduction to risk
						management and behavioral finance principles to
						understand the real-world functioning of securities,
						insurance, and banking industries. The ultimate goal of
						this course is using such industries effectively and
						towards a better society.
					</p>

					<div className="skillWrapper">
						SKILLS YOU WILL GAIN
						<div className="skillGain">
							<span className="skill">Behavioral Finance</span>
							<span className="skill">Financial Markets</span>
							<span className="skill">Finance</span>
							<span className="skill">Behavioral Economics</span>
						</div>
					</div>
				</div>
				<div className="rightPart">
					<div className="infoTag">
						<Language className="infoIcon" />
						<div className="infoDetail">
							<span className="infoTitle">100% online</span>
							<span className="infoCaption">
								Start instantly and learn at your own schedule.
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
							<span className="infoTitle">Beginner Level</span>
							<span className="infoCaption"></span>
						</div>
					</div>
					<div className="infoTag">
						<SubtitlesOutlined className="infoIcon" />
						<div className="infoDetail">
							<span className="infoTitle">English</span>
							<span className="infoCaption">
								Subtitles: Arabic, French, Portuguese
								(European), Italian, Portuguese (Brazilian),
								Vietnamese, Korean, German, Russian, English,
								Spanish, Japanese
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
						<h4 className="instructorName">Robert David</h4>
						<p className="instructorProfession">
							Professor of Economics at Yale University
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
	);
};

export default Learn;
