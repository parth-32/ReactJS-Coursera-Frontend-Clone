import { ChevronRightOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import cls from "./exploreSection.module.css";
import SubjectDetails from "./SubjectDetails";
import { useHistory } from "react-router-dom";
import { api_getCategory } from "../../helper/api_call.helper";

// eslint-disable-next-line no-unused-vars
const DUMMY_SUBJECT = [
	{ id: "data-science", name: "Data Science" },
	{ id: "business", name: "Business" },
	{ id: "computer-science", name: "Computer Science" },
	{ id: "info-tech", name: "Information Technology" },
];
const ExploreSection = (props) => {
	const history = useHistory();

	const [isHover, setIsHover] = useState(false);
	const [hoverId, setHoverId] = useState(null);
	const [categoryData, setCategoryData] = useState([]);

	useEffect(() => {
		api_getCategory().then((res) => {
			setCategoryData(res.data.data);
		});
	}, []);

	const onClickBrowseHandler = (e) => {
		e.preventDefault();
		props.closeExploreHandler(e);
		setIsHover(false);
		history.push("/browse");
	};

	const mouseEnter = (e) => {
		e.preventDefault();
		setIsHover(true);
		setHoverId(e.target.id);
	};

	const onCloseHandler = (path) => {
		history.push(path);
		props.closeExploreHandler();
		setIsHover(false);
	};

	return (
		<section className={`${cls.explore_container}`}>
			<div className={cls.left_category}>
				<ul>
					<h5 className={cls.title}>Subjects</h5>
					{categoryData.map((subject) => {
						return (
							<li key={subject._id} onClick={mouseEnter}>
								<button
									id={subject._id}
									className={cls.subject_button}
								>
									{subject.name}
									<ChevronRightOutlined />
								</button>
							</li>
						);
					})}
				</ul>
				<button
					onClick={onClickBrowseHandler}
					className={cls.browseAll}
				>
					Browse All Category
				</button>
			</div>
			{isHover && hoverId && (
				<SubjectDetails
					id={hoverId}
					onlCloseEvent={(e) => onCloseHandler(e)}
				/>
			)}
		</section>
	);
};

export default ExploreSection;
