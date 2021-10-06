import axios from "axios";

export const api_register = async (dataObj) => {
	// console.log("HELPER CALLED", dataObj);
	return new Promise((resolve, reject) => {
		axios
			.post("http://localhost:3210/auth/register", dataObj)
			.then((data) => resolve(data))
			.catch((e) => reject(e));
	});
};

export const api_login = async (dataObj) => {
	// console.log("HELPER CALLED", dataObj);
	return new Promise((resolve, reject) => {
		axios
			.post("http://localhost:3210/auth/login", dataObj)
			.then((data) => resolve(data))
			.catch((e) => reject(e));
	});
};

export const api_getCategory = async () => {
	const result = await axios.get("http://localhost:3210/category");

	return result;
};

export const api_getCourseByCategory = async (categoryId) => {
	const result = await axios.get(
		"http://localhost:3210/course/" + categoryId
	);

	return result;
};

export const api_getCourseById = async (courseId) => {
	const result = await axios.get(
		"http://localhost:3210/course/id/" + courseId
	);

	return result;
};

export const api_enrollCourse = async (courseId) => {
	const result = await axios.post(
		"http://localhost:3210/enroll/",
		{ course: courseId },
		{
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		}
	);

	return result;
};

export const api_getEnrolledCourseStatus = async (courseId) => {
	const result = await axios.get("http://localhost:3210/enroll/" + courseId, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	});

	return result;
};

export const api_updatedCourseWeekStatus = async (dataObj) => {
	const result = await axios.patch("http://localhost:3210/enroll/", dataObj, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	});

	return result;
};

export const api_getUserEnrolledCourse = async () => {
	const result = await axios.get("http://localhost:3210/enroll/course/me", {
		headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	});

	return result;
};
