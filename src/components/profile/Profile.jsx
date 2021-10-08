import React, { useEffect, useState } from "react";
import { DownloadRounded } from "@mui/icons-material";
import { api_getProfileMe } from "../../helper/api_call.helper";
import { Link } from "react-router-dom";
import Spinner from "../loader/Loader";
import html2canvas from "html2canvas";
import Certificate from "./Certificate";
import "./profile.scss";

const Profile = () => {
	const [profileData, setProfileData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		api_getProfileMe().then((res) => {
			const data = {
				...res.data.data,
				total_course: res.data.data.total_course.map((el) => {
					return {
						...el,
						week_status: el.week_status.every(
							(status) => status.finished === true
						),
					};
				}),
			};
			setProfileData(data);
			setIsLoading(false);
		});
	}, []);

	const nameLogo = (name) => {
		const [first, second] = name.toUpperCase().split(" ");
		return first[0] + second[0];
	};

	const downloadCertificate = (id) => {
		html2canvas(id).then((canvas) => {
			canvas.style.display = "none";
			var image = canvas.toDataURL("png");
			var a = document.createElement("a");
			a.setAttribute(
				"download",
				`${profileData.user.name}_${new Date().getTime()}.png`
			);
			a.setAttribute("href", image);
			a.click();

			id.setAttribute("class", "imageProvider");
		});
	};

	const viewCertificate = (id) => {
		document
			.getElementById(id)
			.setAttribute("class", "imageProvider status");

		downloadCertificate(document.getElementById(id));
	};

	return (
		<>
			<section className="profileContainer">
				{isLoading && <Spinner open={isLoading} />}
				{!isLoading && (
					<>
						<div className="profileLeft">
							<div className="nameLogo">
								{nameLogo(profileData.user.name)}
							</div>
							<span className="profileName">
								{profileData.user.name}
							</span>
							<span className="profileEmail">
								{profileData.user.email}
							</span>
						</div>
						<div className="profileRight">
							<div className="profileCourseSummary">
								<div className="courseEnrolled">
									<span className="summaryHeading">
										Total Enrolled
									</span>
									<span className="summaryCaption">
										{profileData.summary.enrolled}
									</span>
								</div>
								<div className="courseEnrolled">
									<span className="summaryHeading">
										In Progress
									</span>
									<span className="summaryCaption">
										{profileData.summary.in_progress}
									</span>
								</div>
								<div className="courseEnrolled">
									<span className="summaryHeading">
										Completed
									</span>
									<span className="summaryCaption">
										{profileData.summary.completed}
									</span>
								</div>
							</div>
							<div className="certificateWrapper">
								<span className="certificateHeading">
									Download Certificate
								</span>
								<div className="certificateBody">
									{profileData.total_course.map(
										(ele, index) => {
											return (
												<div
													key={ele.course._id}
													className="certificateInfo"
												>
													{" "}
													<span className="srNo">
														{index + 1}
													</span>
													<Link
														to={`/learn/${ele.course._id}`}
														className="courseName"
													>
														{ele.course.title}
													</Link>
													{ele.week_status ? (
														<DownloadRounded
															onClick={() =>
																viewCertificate(
																	ele.course
																		._id
																)
															}
															className="downloadIcon"
														/>
													) : (
														<span className="in_progress">
															In Progress
														</span>
													)}
												</div>
											);
										}
									)}
								</div>
							</div>
						</div>
					</>
				)}
			</section>

			{!isLoading &&
				profileData.total_course
					.filter((data) => data.week_status === true)
					.map((data) => {
						return (
							<Certificate
								key={data.course._id}
								user={profileData.user.name}
								id={data.course._id}
								course={data.course.title}
								updatedAt={data.updatedAt}
							/>
						);
					})}
		</>
	);
};

export default Profile;
