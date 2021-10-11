import React, { useEffect, useState } from "react";
import cls from "./subjectDetail.module.css";
import { Close } from "@mui/icons-material";
import { api_getCourseByCategory } from "../../helper/api_call.helper";

const SubjectDetails = (props) => {
	const [listData, setListData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		api_getCourseByCategory(props.id, "?limit=2").then((res) => {
			setListData(res.data.data);
			setIsLoading(false);
		});
	}, [props.id]);

	return (
		<div className={cls.right_category_courses}>
			{!isLoading && (
				<>
					<div className={cls.headerMain}>
						<h3 className={cls.subjectTitle}>
							{listData?.category?.name}
						</h3>
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
								<h4 className={cls.topic_title}>Course</h4>
								<ul>
									{listData?.course.map((data) => {
										return (
											<li key={`${Math.random()}`}>
												<span
													className={cls.link}
													onClick={(e, path) =>
														props.onlCloseEvent(
															`/course?search=${data.title}`
														)
													}
												>
													{data.title}
												</span>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						{/* <div className={cls.secondPart}>
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
						<div className={cls.third}></div> */}
					</div>
				</>
			)}
		</div>
	);
};

export default SubjectDetails;
