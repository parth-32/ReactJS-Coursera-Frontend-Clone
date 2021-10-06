import React, { useState, useEffect } from "react";
import "./lectureWeek.scss";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

function secondsToHms(d) {
	d = Number(d);
	var h = Math.floor(d / 3600);
	var m = Math.floor((d % 3600) / 60);
	var s = Math.floor((d % 3600) % 60);

	var hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
	return hDisplay + mDisplay + sDisplay;
}

const LectureWeek = (props) => {
	const params = useParams();

	const [isFinished, setIsFinished] = useState(false);
	const [duration, setDuration] = useState(0);

	const { weeks } = props;

	useEffect(() => {
		//filter current week status
		const finish_status = props.status.filter(
			(week) => week._id === params.weekId
		)[0].finished;
		setIsFinished(finish_status);
	}, [params, props.status]);

	//Filter to get Week number
	const weekNumber = weeks.findIndex((week) => week._id === params.weekId);

	//Filter to get current week data
	const week = weeks.filter((week) => week._id === params.weekId)[0];

	const videoProgressEvent = (progress) => {
		console.log("PROGRESS ====", progress);
		if (progress.played >= 0.98) {
			console.log("FINISHED");
			props.onWeekFinish(params.weekId);
			setIsFinished(true);
		}
	};

	const videoDurationEvent = (duration) => {
		console.log("DURATION (s)==== ", duration);
		setDuration(secondsToHms(duration));
		console.log("DURATION (time)==== ", secondsToHms(duration));
	};

	return (
		<div className="lectureBody">
			{week && (
				<>
					<span className="courseTitle">{props.title}</span>
					<span className="offer_by">by {props.offer_by}</span>
					<div className="weekWrapper">
						<span className="weekNumber">
							{isFinished && (
								<CheckCircle className="weekCompleted" />
							)}
							Week {weekNumber + 1} ({duration})
						</span>
						<span className="weekTitle">{week.title}</span>
						<div className="player">
							<ReactPlayer
								url={week.video_url}
								// url="https://d3c33hcgiwev3.cloudfront.net/qHTMkA4fEeW2rSIAC2yC6g.processed/full/540p/index.webm?Expires=1633564800&Signature=bKle5j1R1bbV2eGAv6moeR-nBL-isnDOIHY9VOVbopYiuTOoTMt5JG8MBllq9B-IoEv-XH05J8J60HEI5UJzKZAP3-w2HR6ShmUdEeMMKUv9NK5D5BWWwZwQEHne4NS1mKvUVYCA-~wqF2RkKAUtrFGXXVcorHnba8xTv7ngUqk_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A"
								controls={true}
								onProgress={videoProgressEvent}
								onDuration={videoDurationEvent}
								width="100%"
								height="100%"
							/>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default LectureWeek;
