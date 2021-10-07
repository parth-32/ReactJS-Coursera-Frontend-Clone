import React, { useCallback, useEffect, useState } from "react";
import cls from "./course.module.css";
import { useLocation, useHistory } from "react-router-dom";
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

import {
	api_getCourseByCategory,
	api_getQueryCourse,
} from "../../helper/api_call.helper";
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

const PAGE_SIZE = 4;

var displayCheckbox = {};

const Course = () => {
	const location = useLocation();
	const history = useHistory();
	const query = new URLSearchParams(location.search);
	const searchQuery = query.get("search");
	const categoryQuery = query.get("category");

	const [isLevelCheckBoxOpen, setLevelCheckBoxOpen] = useState(false);
	const [isLanguageCheckBoxOpen, setLanguageCheckBoxOpen] = useState(false);

	const [isLevelChecked, setIsLevelChecked] = useState({});
	const [isLanguageChecked, setIsLanguageChecked] = useState({});

	const [courseData, setCourseData] = useState([]);
	const [paginationCount, setPaginationCount] = useState(0);

	const [isLoading, setIsLoading] = useState(true);

	const onClickCheckBoxHandler = (e, type) => {
		e.preventDefault();
		if (type === "level") setLevelCheckBoxOpen((state) => !state);

		if (type === "language") setLanguageCheckBoxOpen((state) => !state);
	};

	isLevelCheckBoxOpen && (displayCheckbox.level = { visibility: "visible" });
	!isLevelCheckBoxOpen && (displayCheckbox.level = { visibility: "hidden" });

	isLanguageCheckBoxOpen &&
		(displayCheckbox.language = { visibility: "visible" });
	!isLanguageCheckBoxOpen &&
		(displayCheckbox.language = { visibility: "hidden" });

	const breadcrumbs = [
		<Link underline="hover" key="1" color="inherit" href="/">
			Browse
		</Link>,
		<Typography className={cls.typography} key="2" color="inherit">
			{!isLoading && categoryQuery && courseData.category.name}
			{!isLoading && searchQuery && searchQuery}
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

	const getLevel = (arr) => {
		return arr.length > 0 ? `&level=` + arr.join(",") : "";
	};
	const getLanguage = (arr) => {
		return arr.length > 0 ? `&language=` + arr.join(",") : "";
	};

	useEffect(() => {
		// Applying Level and Language filter
		var levelKeys = Object.keys(isLevelChecked);
		var filteredLevel = levelKeys.filter((key) => isLevelChecked[key]);

		var languageKeys = Object.keys(isLanguageChecked);
		var filteredLanguage = languageKeys.filter(
			(key) => isLanguageChecked[key]
		);

		//passing category id
		categoryQuery &&
			api_getCourseByCategory(
				`${categoryQuery}${getLevel(filteredLevel)}${getLanguage(
					filteredLanguage
				)}`
			).then((res) => {
				setPaginationCount(
					Math.ceil(res.data.data.course.length / PAGE_SIZE)
				);
			});
		categoryQuery &&
			api_getCourseByCategory(
				categoryQuery,
				`?page=1${getLevel(filteredLevel)}${getLanguage(
					filteredLanguage
				)}`
			).then((res) => {
				setCourseData(res.data.data);
				setIsLoading(false);
			});

		//search value
		searchQuery &&
			api_getQueryCourse(
				`?search=${searchQuery}${getLevel(filteredLevel)}${getLanguage(
					filteredLanguage
				)}`
			).then((res) => {
				setPaginationCount(Math.ceil(res.data.data.length / PAGE_SIZE));
			});

		searchQuery &&
			api_getQueryCourse(
				`?search=${searchQuery}&page=1${getLevel(
					filteredLevel
				)}${getLanguage(filteredLanguage)}`
			).then((res) => {
				setCourseData(res.data.data);
				setIsLoading(false);
			});

		!categoryQuery && !searchQuery && history.replace("/browse");
	}, [
		levelChangeHandler,
		languageChangeHandler,
		categoryQuery,
		searchQuery,
		history,
		isLevelChecked,
		isLanguageChecked,
	]);

	const paginationHandler = (e, page) => {
		console.log("Page Number === ", page);
		// Applying Level and Language filter
		var levelKeys = Object.keys(isLevelChecked);
		var filteredLevel = levelKeys.filter((key) => isLevelChecked[key]);

		var languageKeys = Object.keys(isLanguageChecked);
		var filteredLanguage = languageKeys.filter(
			(key) => isLanguageChecked[key]
		);

		categoryQuery &&
			api_getCourseByCategory(
				categoryQuery,
				`?page=${page}${getLevel(filteredLevel)}${getLanguage(
					filteredLanguage
				)}`
			).then((res) => {
				setCourseData(res.data.data);
				setIsLoading(false);
			});

		searchQuery &&
			api_getQueryCourse(
				`?page=${page}&search=${searchQuery}${getLevel(
					filteredLevel
				)}${getLanguage(filteredLanguage)}`
			).then((res) => {
				setCourseData(res.data.data);
				setIsLoading(false);
			});
	};

	// console.log("isLevelChecked ===", isLevelChecked);
	// console.log("isLanguageChecked ===", isLanguageChecked);
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
					{!isLoading && categoryQuery && courseData.category.name}{" "}
					{!isLoading && searchQuery && searchQuery} Courses
				</div>
			</div>

			{/* Filter Section */}
			<div className={cls.filterContainer}>
				<h2 className={cls.totalCount}>
					{!isLoading && categoryQuery && (
						<span>
							Showing {courseData.course.length} total results for
							"{courseData.category.name}"
						</span>
					)}
					{!isLoading && searchQuery && (
						<span>
							Showing {courseData.length} total results for "
							{searchQuery}"
						</span>
					)}
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
									<label htmlFor={language.id}>
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
					<div
						className={cls.filterBox}
						onClick={(e, type) =>
							onClickCheckBoxHandler(e, "level")
						}
					>
						<span>Level</span>
						{!isLevelCheckBoxOpen ? (
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
							style={displayCheckbox.level}
						>
							{DUMMY_DATA[0].level.map((level) => {
								return (
									<label htmlFor={level.id}>
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
				</div>
			</div>

			{/* CourseList Section */}
			<div className={cls.courseListContainer}>
				{!isLoading &&
					categoryQuery &&
					courseData.course.map((course) => {
						return <CourseItem key={course._id} data={course} />;
					})}
				{!isLoading &&
					searchQuery &&
					courseData.map((course) => {
						return <CourseItem key={course._id} data={course} />;
					})}
			</div>

			{/* Pagination */}
			<div className={cls.pagination}>
				<Pagination
					count={!isLoading && paginationCount}
					shape="rounded"
					onChange={paginationHandler}
				/>
			</div>
		</div>
	);
};

export default Course;
