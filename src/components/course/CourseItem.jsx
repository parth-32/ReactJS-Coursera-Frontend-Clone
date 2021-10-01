import React from "react";
import cls from "./courseItem.module.css";
import { Star, StarHalf } from "@mui/icons-material";
import { Link } from "react-router-dom";

const CourseItem = (props) => {
	const { data: course } = props;

	return (
		<Link className={cls.learnLink} to={`/learn/${course.id}`}>
			<div className={cls.courseItem}>
				<div className={cls.courseImage}>
					<img src={course.logo} alt="course"></img>
				</div>
				<div className={cls.courseDetails}>
					<h3>{course.title}</h3>
					<div className={cls.offerBy}>{course.offer_by}</div>
					<div className={cls.type}>{course.type}</div>
					<div className={cls.info}>
						<div className={cls.ratingEnroll}>
							<Star className={cls.starIcon} />
							<Star className={cls.starIcon} />
							<Star className={cls.starIcon} />
							<Star className={cls.starIcon} />
							<StarHalf className={cls.starIcon} />
							<span className={cls.ratingText}>
								{course.rating}
							</span>
							<span className={cls.ratingCount}>
								({course.rated_by})
							</span>
							<span className={cls.enrolledCount}>
								{course.enroll_count} students
							</span>
						</div>
						<div className={cls.level}>{course.level}</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default CourseItem;
