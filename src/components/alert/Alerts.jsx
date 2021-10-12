// import { ToastContainer, toast } from "react-toastify";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Alerts = (props) => {
	// console.log("alert rendered");
	var toast_popup;
	const { type, message } = props;

	const options = {
		position: "top-right",
		autoClose: 3000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	};

	switch (type) {
		case "warning":
			toast_popup = toast.warn(message, { ...options, toastId: "1" });
			break;

		case "success":
			toast_popup = toast.success(message, { ...options, toastId: "2" });
			break;

		case "info":
			toast_popup = toast.info(message, { ...options, toastId: "3" });
			break;

		case "error":
			toast_popup = toast.error(message, { ...options, toastId: "4" });
			break;

		default:
			toast_popup = toast(message, { ...options, toastId: "5" });
			break;
	}

	return toast_popup;
};

export default Alerts;
