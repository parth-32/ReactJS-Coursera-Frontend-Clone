import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import store from "./store/index";

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar
				newestOnTop={true}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				limit={5}
			/>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);
