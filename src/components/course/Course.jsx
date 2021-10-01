import React, { useCallback, useEffect, useState } from "react";
import cls from "./course.module.css";
import { useLocation } from "react-router-dom";
import {
	Link,
	Breadcrumbs,
	Typography,
	Stack,
	Pagination,
} from "@mui/material";
import {
	KeyboardArrowDownOutlined,
	KeyboardArrowUpOutlined,
	NavigateNext,
} from "@mui/icons-material";
import CourseItem from "./CourseItem";

const DUMMY_DATA = [
	{
		language: [
			{ id: "English", language: "English" },
			{ id: "Hindi", language: "Hindi" },
			{ id: "Gujarati", language: "Gujarati" },
			{ id: "French", language: "French" },
			{ id: "German", language: "German" },
			{ id: "Italian", language: "Italian" },
			{ id: "Russian", language: "Russian" },
			{ id: "Spanish", language: "Spanish" },
			{ id: "Telugu", language: "Telugu" },
			{ id: "Marathi", language: "Marathi" },
			{ id: "Greek", language: "Greek" },
		],
		level: [
			{ id: "Beginner", level: "Beginner" },
			{ id: "Intermediate", level: "Intermediate" },
			{ id: "Mixed", level: "Mixed" },
			{ id: "Advanced", level: "Advanced" },
		],
	},
];

const DUMMY_COURSES = [
	{
		id: "1",
		logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/df/9bd6cc81554fa385758881f11c8c75/9.png",
		title: "Getting Started with Power BI Desktop",
		offer_by: "Uka Tarsadiya University",
		type: "Course",
		rating: 4.7,
		rated_by: 3210,
		enroll_count: 65444,
		level: "Intermediate",
	},
	{
		id: "2",
		logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/df/9bd6cc81554fa385758881f11c8c75/9.png",
		title: "Getting Started with Power BI Desktop",
		offer_by: "La Net Team",
		type: "Course",
		rating: 4.7,
		rated_by: 3210,
		enroll_count: 65444,
		level: "Intermediate",
	},
	{
		id: "3",
		logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/df/9bd6cc81554fa385758881f11c8c75/9.png",
		title: "Getting Started with Power BI Desktop",
		offer_by: "Google",
		type: "Course",
		rating: 4.7,
		rated_by: 3210,
		enroll_count: 65444,
		level: "Advanced",
	},
	{
		id: "4",
		logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/df/9bd6cc81554fa385758881f11c8c75/9.png",
		title: "Getting Started with Power BI Desktop",
		offer_by: "Microsoft",
		type: "Course",
		rating: 4.7,
		rated_by: 3210,
		enroll_count: 65444,
		level: "Advanced",
	},
	{
		id: "5",
		logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/df/9bd6cc81554fa385758881f11c8c75/9.png",
		title: "Getting Started with Power BI Desktop",
		offer_by: "IBM",
		type: "Course",
		rating: 4.7,
		rated_by: 3210,
		enroll_count: 65444,
		level: "Mixed",
	},
];

const courseName = (name) => {
	return name.split("-").join(" ");
};

var displayCheckbox = {};

const Course = () => {
	const [isDurationCheckBoxOpen, setDurationCheckBoxOpen] = useState(false);
	const [isLevelCheckBoxOpen, setLevelCheckBoxOpen] = useState(false);
	const [isSubjectCheckBoxOpen, setSubjectCheckBoxOpen] = useState(false);
	const [isLanguageCheckBoxOpen, setLanguageCheckBoxOpen] = useState(false);

	const [isLevelChecked, setIsLevelChecked] = useState({});
	const [isLanguageChecked, setIsLanguageChecked] = useState({});

	// const levelRef = useRef();

	const onClickCheckBoxHandler = (e, type) => {
		e.preventDefault();
		if (type === "level") setLevelCheckBoxOpen((state) => !state);
		if (type === "duration") setDurationCheckBoxOpen((state) => !state);
		if (type === "subject") setSubjectCheckBoxOpen((state) => !state);
		if (type === "language") setLanguageCheckBoxOpen((state) => !state);
	};

	isLevelCheckBoxOpen && (displayCheckbox.level = { visibility: "visible" });
	!isLevelCheckBoxOpen && (displayCheckbox.level = { visibility: "hidden" });

	isDurationCheckBoxOpen &&
		(displayCheckbox.duration = { visibility: "visible" });
	!isDurationCheckBoxOpen &&
		(displayCheckbox.duration = { visibility: "hidden" });

	isSubjectCheckBoxOpen &&
		(displayCheckbox.subject = { visibility: "visible" });
	!isSubjectCheckBoxOpen &&
		(displayCheckbox.subject = { visibility: "hidden" });

	isLanguageCheckBoxOpen &&
		(displayCheckbox.language = { visibility: "visible" });
	!isLanguageCheckBoxOpen &&
		(displayCheckbox.language = { visibility: "hidden" });

	const { search } = useLocation();
	const query = search.split("=").pop();

	const breadcrumbs = [
		<Link underline="hover" key="1" color="inherit" href="/">
			Browse
		</Link>,
		<Typography className={cls.typography} key="2" color="inherit">
			{courseName(query)}
		</Typography>,
	];

	const levelChangeHandler = useCallback((e) => {
		const id = e.target.id;
		setIsLevelChecked((state) => {
			return {
				...state,
				[id]: !state[id],
			};
		});
	}, []);

	const languageChangeHandler = useCallback((e) => {
		const id = e.target.id;
		setIsLanguageChecked((state) => {
			return {
				...state,
				[id]: !state[id],
			};
		});
	}, []);

	useEffect(() => {}, [levelChangeHandler, languageChangeHandler]);

	return (
		<div className={cls.container}>
			{/* Breadcrumbs Section */}
			<div className={cls.breadcrumbsContainer}>
				<Stack spacing={2}>
					<Breadcrumbs
						className={cls.breadcrumbs}
						separator={
							<NavigateNext fontSize="medium" margin="0px 20px" />
						}
						aria-label="breadcrumb"
					>
						{breadcrumbs}
					</Breadcrumbs>
				</Stack>
				<div className={cls.courseHeading}>
					{courseName(query)} Courses
				</div>
			</div>

			{/* Filter Section */}
			<div className={cls.filterContainer}>
				<h2 className={cls.totalCount}>
					<span>Showing 355 total results for "{query}"</span>
				</h2>
				<p>Filter by</p>
				<div className={cls.filterSection}>
					{/** Language Filter  */}
					<div
						className={cls.filterBox}
						onClick={(e, type) =>
							onClickCheckBoxHandler(e, "language")
						}
					>
						<span>Language</span>
						{!isLanguageCheckBoxOpen ? (
							<KeyboardArrowDownOutlined
								className={cls.filterDownArrow}
							/>
						) : (
							<KeyboardArrowUpOutlined
								className={cls.filterDownArrow}
							/>
						)}
						<div
							className={`${cls.checkboxes}`}
							style={displayCheckbox.language}
						>
							{DUMMY_DATA[0].language.map((language) => {
								return (
									<label for={language.id}>
										<input
											type="checkbox"
											id={language.id}
											checked={
												isLanguageChecked[
													language.id
												] || false
											}
											onClick={languageChangeHandler}
										/>
										{language.language}
									</label>
								);
							})}
						</div>
					</div>

					{/** Level Filter  */}
					<div className={cls.filterBox}>
						<span>Level</span>
						{!isLevelCheckBoxOpen ? (
							<KeyboardArrowDownOutlined
								onClick={(e, type) =>
									onClickCheckBoxHandler(e, "level")
								}
								className={cls.filterDownArrow}
							/>
						) : (
							<KeyboardArrowUpOutlined
								onClick={(e, type) =>
									onClickCheckBoxHandler(e, "level")
								}
								className={cls.filterDownArrow}
							/>
						)}
						<div
							className={`${cls.checkboxes}`}
							style={displayCheckbox.level}
						>
							{DUMMY_DATA[0].level.map((level) => {
								return (
									<label for={level.id}>
										<input
											type="checkbox"
											id={level.id}
											checked={
												isLevelChecked[level.id] ||
												false
											}
											onClick={levelChangeHandler}
										/>
										{level.level}
									</label>
								);
							})}
						</div>
					</div>

					{/** Duration Filter  */}
					<div
						className={cls.filterBox}
						onClick={(e, type) =>
							onClickCheckBoxHandler(e, "duration")
						}
					>
						<span>Duration</span>
						{!isDurationCheckBoxOpen ? (
							<KeyboardArrowDownOutlined
								className={cls.filterDownArrow}
							/>
						) : (
							<KeyboardArrowUpOutlined
								className={cls.filterDownArrow}
							/>
						)}
					</div>

					{/** Subject Filter  */}
					<div
						className={cls.filterBox}
						onClick={(e, type) =>
							onClickCheckBoxHandler(e, "subject")
						}
					>
						<span>Subject</span>
						{!isSubjectCheckBoxOpen ? (
							<KeyboardArrowDownOutlined
								className={cls.filterDownArrow}
							/>
						) : (
							<KeyboardArrowUpOutlined
								className={cls.filterDownArrow}
							/>
						)}
					</div>
				</div>
			</div>

			{/* CourseList Section */}
			<div className={cls.courseListContainer}>
				{DUMMY_COURSES.map((course) => {
					return <CourseItem data={course} />;
				})}
			</div>

			{/* Pagination */}
			<div className={cls.pagination}>
				<Pagination count={10} shape="rounded" />
			</div>
		</div>
	);
};

export default Course;
