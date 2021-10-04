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
	const result = await axios.get("http://localhost:3210/course/" + categoryId,
		// {
		// 	headers: {
		// 		Authorization: `Bearer ${localStorage.getItem("token")}`,
		// 	},
		// }
	);

	return result;
};
