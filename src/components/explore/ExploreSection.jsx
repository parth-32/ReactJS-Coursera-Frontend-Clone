/* eslint-disable no-unused-vars */
import { ChevronRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import cls from "./exploreSection.module.css";
import SubjectDetails from "./SubjectDetails";
import { useLocation, useHistory } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
const DUMMY_SUBJECT = [
	{ id: "data-science", name: "Data Science" },
	{ id: "business", name: "Business" },
	{ id: "computer-science", name: "Computer Science" },
	{ id: "info-tech", name: "Information Technology" },
];
var locationMargin = {};
const ExploreSection = (props) => {
	const location = useLocation();
	const history = useHistory();

	const [isHover, setIsHover] = useState(false);
	const [hoverId, setHoverId] = useState(null);

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
		console.log(e.target.id);
	};

	const onCloseHandler = (e) => {
		e.preventDefault();
		console.log(e);
		props.closeExploreHandler(e);
		setIsHover(false);
	};

	return (
		<section className={`${cls.explore_container}`} style={locationMargin}>
			<div className={cls.left_category}>
				<ul>
					<h5 className={cls.title}>Subjects</h5>
					{DUMMY_SUBJECT.map((subject) => {
						return (
							<li key={subject.id} onMouseEnter={mouseEnter}>
								<button
									id={subject.id}
									//(e)=>hoverEvent(e)
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
