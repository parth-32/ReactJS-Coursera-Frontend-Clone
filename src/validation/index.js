export const sanitizeString = (s) => {
	return s
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/"/g, "&quot;")
		.replace(/>/g, "&gt;");
};

export const validateString = (value, minLen, maxLen = 20) => {
	const data = value.trim();

	if (data.length < minLen || data.length > maxLen) {
		return false;
	}

	return data;
};

export const validateEmail = (value) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(value).toLowerCase());
};

export const validatePassword = (value, minLen = 8, maxLen = 16) => {
	const password = value.trim();

	var passRegex = /^[A-Za-z0-9]$/;
	// console.log(password);
	if (
		(!password.match(passRegex) && password.length < minLen) ||
		password.len > maxLen
	) {
		return false;
	}
	return true;
};
