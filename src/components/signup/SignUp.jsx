import React, { useState, useRef } from "react";
import Modal from "@mui/material/Modal";
import { Link, useHistory } from "react-router-dom";
import { Close } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { authAction } from "../../store/auth_slice";
// import { apiAction } from "../../store/api_slice";
import { api_register } from "../../helper/api_call.helper";
import "../login/login.scss";
import {
	validateString,
	sanitizeString,
	validateEmail,
	validatePassword,
} from "../../validation";
import Alerts from "../alert/Alerts";

var ALERT_TOAST = {};

const SignUp = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	//model
	const [open, setOpen] = useState(true);

	//popup
	const [isAllow, setIsAllow] = useState(false);

	//form data
	const emailRef = useRef();
	const nameRef = useRef();
	const passwordRef = useRef();

	const handleClose = () => {
		setOpen(false);
		history.replace("/browse");
	};

	const formSubmitHandler = async (e) => {
		e.preventDefault();
		const email = emailRef.current.value;
		const name = nameRef.current.value;
		const password = passwordRef.current.value;

		setIsAllow((state) => !state);

		if (!validateString(name)) {
			ALERT_TOAST = {
				message: "Name length should be 3-20",
				type: "error",
			};
		} else if (!validateEmail(email)) {
			//set email error
			ALERT_TOAST = {
				message: "Enter Valid Email",
				type: "error",
			};
		} else if (!validatePassword(password)) {
			//set password error
			ALERT_TOAST = {
				message:
					"Password should contain Capital,small letter and digits",
				type: "error",
			};
		} else {
			const sanitizedName = sanitizeString(name);

			try {
				const response = await api_register({
					name: sanitizedName,
					email,
					password,
				});

				dispatch(
					authAction.signup({
						token: response.data.token,
						user: {
							name: response.data.data.name,
							email: response.data.data.email,
						},
					})
				);

				history.replace("/browse");
			} catch (e) {
				console.log("ERROR=======", e.response.data.message);
				dispatch(authAction.logout());
				ALERT_TOAST = {
					message: e.response.data.message,
					type: "error",
				};
			}
		}
	};

	return (
		<React.Fragment>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				// style={{ background: "rgba(0,0,0,0.5)" }}
			>
				<section className="box">
					<span className="ModalHeader">
						<p id="modal-modal-title" className="greeting">
							Sign up
						</p>
						<Close onClick={handleClose} className="closeIcon" />
					</span>
					<div className="bodyPart" id="modal-modal-description">
						<form className="form" onSubmit={formSubmitHandler}>
							<div className="formGroup">
								<label htmlFor="fullName" className="labels">
									Full Name
								</label>
								<input
									className="input"
									id="fullName"
									type="text"
									ref={nameRef}
									placeholder="Enter Your Full Name"
								/>
							</div>
							<div className="formGroup">
								<label htmlFor="email" className="labels">
									Email
								</label>
								<input
									className="input"
									id="email"
									type="email"
									ref={emailRef}
									placeholder="test@example.com"
								/>
							</div>
							<div className="formGroup">
								<label htmlFor="password" className="labels">
									Password
								</label>
								<input
									className="input"
									id="password"
									type="password"
									ref={passwordRef}
									placeholder="Enter Your Password"
								/>
							</div>

							<button className="btnSubmit">Join for Free</button>

							<p className="hzLine">
								<span>or</span>
							</p>

							<span className="toggleLink">
								Already on Coursera?
								<Link to="/login"> Log in</Link>
							</span>
						</form>
					</div>
					{isAllow && (
						<Alerts
							message={ALERT_TOAST.message}
							type={ALERT_TOAST.type}
						/>
					)}
				</section>
			</Modal>
		</React.Fragment>
	);
};

export default SignUp;
