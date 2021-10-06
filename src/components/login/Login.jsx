import React, { useState, useRef } from "react";
import Modal from "@mui/material/Modal";
import { Link, useHistory } from "react-router-dom";
import { Close } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { authAction } from "../../store/auth_slice";
import { api_login } from "../../helper/api_call.helper";
import Alerts from "../alert/Alerts";
import "./login.scss";
import { validateEmail, validatePassword } from "../../validation";

var ALERT_TOAST = {};

const Login = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const [open, setOpen] = useState(true);

	//popup
	const [isAllow, setIsAllow] = useState(false);

	//form data
	const emailRef = useRef();
	const passwordRef = useRef();

	const handleClose = () => {
		setOpen(false);
		history.push("/");
	};

	const formSubmitHandler = async (e) => {
		e.preventDefault();

		setIsAllow((state) => !state);

		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		if (!validateEmail(email)) {
			//set email error
			ALERT_TOAST = {
				message: "Enter Valid Email address",
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
			try {
				const response = await api_login({
					email,
					password,
				});
				console.log(response);
				dispatch(
					authAction.login({
						token: response.data.token,
						user: {
							name: response.data.data.name,
							email: response.data.data.email,
						},
					})
				);

				// history.replace("/browse");
			} catch (e) {
				console.log("ERROR=======", e?.response?.data?.message || e);
				ALERT_TOAST = {
					message: e?.response?.data?.message || e.message,
					type: "error",
				};
				dispatch(authAction.logout());
			}
		}
	};

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			style={{ background: "rgba(0,0,0,0.5)" }}
		>
			<section className="box">
				<span className="ModalHeader">
					<p id="modal-modal-title" className="greeting">
						Welcome Back
					</p>
					<Close onClick={handleClose} className="closeIcon" />
				</span>
				<div className="bodyPart" id="modal-modal-description">
					<form className="form" onSubmit={formSubmitHandler}>
						<div className="formGroup">
							<label htmlFor="email" className="labels">
								Email
							</label>
							<input
								className="input"
								id="email"
								type="email"
								placeholder="test@example.com"
								ref={emailRef}
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
								placeholder="Enter Your Password"
								ref={passwordRef}
							/>
						</div>

						<button className="btnSubmit">Login</button>

						<p className="hzLine">
							<span>or</span>
						</p>

						<span className="toggleLink">
							New to Coursera?
							<Link to="/signUp"> Sign up</Link>
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
	);
};

export default Login;
