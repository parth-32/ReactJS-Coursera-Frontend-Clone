import React, { useEffect, useState } from "react";
import cls from "./subjectDetail.module.css";
import { Close } from "@mui/icons-material";

// import { Link } from "react-router-dom";

const DUMMY_DATA = [
	{
		id: "business",
		popular_skills: [
			"Project Management",
			"Excel",
			"Blockchain",
			"Power BI",
			"Design",
		],
		degrees: [
			{
				icon: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Uka_Tarsadia_University_Logo.png",
				university: "Uka Tarsadiya University",
				course: "Master in React Js",
			},
			{
				icon: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Uka_Tarsadia_University_Logo.png",
				university: "Uka Tarsadiya University",
				course: "Master in Node Js",
			},
			{
				icon: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Uka_Tarsadia_University_Logo.png",
				university: "Uka Tarsadiya University",
				course: "Master in Full stack",
			},
			{
				icon: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Uka_Tarsadia_University_Logo.png",
				university: "La net team",
				course: "Master in Web Development",
			},
		],
	},
	{
		id: "data-science",
		popular_skills: [
			"Project Management",
			"Excel",
			"Blockchain",
			"Power BI",
			"Design",
		],
		degrees: [
			{
				icon: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=1&w=36&h=36",
				university: "Uka Tarsadiya University",
				course: "Master in React Js",
			},
			{
				icon: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=1&w=36&h=36",
				university: "Uka Tarsadiya University",
				course: "Master in Node Js",
			},
			{
				icon: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=1&w=36&h=36",
				university: "Uka Tarsadiya University",
				course: "Master in Full stack",
			},
			{
				icon: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=1&w=36&h=36",
				university: "La net team",
				course: "Master in Web Development",
			},
		],
	},
	{
		id: "info-tech",
		popular_skills: [
			"Project Management",
			"Excel",
			"Blockchain",
			"Power BI",
			"Design",
		],
		degrees: [
			{
				icon: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Uka_Tarsadia_University_Logo.png",
				university: "Uka Tarsadiya University",
				course: "Master in React Js",
			},
			{
				icon: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Uka_Tarsadia_University_Logo.png",
				university: "Uka Tarsadiya University",
				course: "Master in Node Js",
			},
			{
				icon: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Uka_Tarsadia_University_Logo.png",
				university: "Uka Tarsadiya University",
				course: "Master in Full stack",
			},
			{
				icon: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Uka_Tarsadia_University_Logo.png",
				university: "La net team",
				course: "Master in Web Development",
			},
		],
	},
	{
		id: "computer-science",
		popular_skills: [
			"Project Management",
			"Excel",
			"Blockchain",
			"Power BI",
			"Design",
		],
		degrees: [
			{
				icon: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Uka_Tarsadia_University_Logo.png",
				university: "Uka Tarsadiya University",
				course: "Master in React Js",
			},
			{
				icon: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Uka_Tarsadia_University_Logo.png",
				university: "Uka Tarsadiya University",
				course: "Master in Node Js",
			},
			{
				icon: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Uka_Tarsadia_University_Logo.png",
				university: "Uka Tarsadiya University",
				course: "Master in Full stack",
			},
			{
				icon: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Uka_Tarsadia_University_Logo.png",
				university: "La net team",
				course: "Master in Web Development full crash course 2021",
			},
		],
	},
];
const SubjectDetails = (props) => {
	const [skills, setSkills] = useState([]);
	const [degrees, setDegrees] = useState([]);
	const [subject, setSubject] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const { id } = props;
	// console.log("id", id);
	useEffect(() => {
		setIsLoading(true);
		const data = DUMMY_DATA.filter((data) => data.id === id);
		setSubject(data[0].id);
		setSkills(data[0].popular_skills);
		setDegrees(data[0].degrees);

		setIsLoading(false);
	}, [id]);

	return (
		<div className={cls.right_category_courses}>
			{!isLoading && (
				<>
					<div className={cls.headerMain}>
						<h3 className={cls.subjectTitle}>{subject}</h3>
						<Close
							onClick={props.onlCloseEvent}
							className={cls.close}
						/>
					</div>

					<div className={cls.wrapper}>
						<div className={cls.firstPart}>
							<div className={cls.part}>
								<h4 className={cls.topic_title}>Get Started</h4>
								<ul>
									<li>Free Course</li>
									<li>Most Popular</li>
								</ul>
							</div>
							<div className={cls.part}>
								<h4 className={cls.topic_title}>
									Popular Skills
								</h4>
								<ul>
									{subject &&
										skills.map((skill) => {
											return (
												<li key={`${Math.random()}`}>
													{/* <Link
														className={cls.link}
														to={`/course?query=${skill
															.toLowerCase()
															.split(" ")
															.join("-")}`}
														on={
															props.onlCloseEvent
														}
													>
														{skill}
													</Link> */}
													<a
														className={cls.link}
														href={`/course?query=${skill
															.toLowerCase()
															.split(" ")
															.join("-")}`}
													>
														{skill}
													</a>
												</li>
											);
										})}
								</ul>
							</div>
						</div>
						<div className={cls.secondPart}>
							<h4 className={cls.topic_title}>Degrees</h4>
							<ul>
								{degrees.map((data) => {
									return (
										<li key={`${Math.random()}`}>
											<div className={cls.logo}>
												<img
													height="100%"
													width="100%"
													src={data.icon}
													alt="logo"
												></img>
											</div>
											<div className={cls.content}>
												<p className={cls.university}>
													{data.university}
												</p>
												<p className={cls.course}>
													{data.course}
												</p>
											</div>
										</li>
									);
								})}
							</ul>
						</div>
						<div className={cls.third}></div>
					</div>
				</>
			)}
		</div>
	);
};

export default SubjectDetails;
