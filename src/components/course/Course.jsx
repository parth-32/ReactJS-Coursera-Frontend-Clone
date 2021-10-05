import React, { useCallback, useEffect, useState } from "react";
import cls from "./course.module.css";
import { useLocation, useParams } from "react-router-dom";
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

import { api_getCourseByCategory } from "../../helper/api_call.helper";
import Spinner from "../loader/Loader";

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

var displayCheckbox = {};

const Course = () => {
	const [isDurationCheckBoxOpen, setDurationCheckBoxOpen] = useState(false);
	const [isLevelCheckBoxOpen, setLevelCheckBoxOpen] = useState(false);
	const [isSubjectCheckBoxOpen, setSubjectCheckBoxOpen] = useState(false);
	const [isLanguageCheckBoxOpen, setLanguageCheckBoxOpen] = useState(false);

	const [isLevelChecked, setIsLevelChecked] = useState({});
	const [isLanguageChecked, setIsLanguageChecked] = useState({});

	const params = useParams();

	const [courseData, setCourseData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

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
	console.log("QUERY : ", query);

	const breadcrumbs = [
		<Link underline="hover" key="1" color="inherit" href="/">
			Browse
		</Link>,
		<Typography className={cls.typography} key="2" color="inherit">
			{!isLoading && courseData.category.name}
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

	useEffect(() => {
		async function fetchCourse(categoryId) {
			return await api_getCourseByCategory(categoryId);
		}

		fetchCourse(params.course).then((res) => {
			setCourseData(res.data.data);
			setIsLoading(false);
		});
	}, [levelChangeHandler, languageChangeHandler, params]);

	return (
		<div className={cls.container}>
			<Spinner open={isLoading} />
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
					{!isLoading && courseData.category.name} Courses
				</div>
			</div>

			{/* Filter Section */}
			<div className={cls.filterContainer}>
				<h2 className={cls.totalCount}>
					<span>
						Showing {!isLoading && courseData.course.length} total
						results for "{!isLoading && courseData.category.name}"
					</span>
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
				{!isLoading &&
					courseData.course.map((course) => {
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
