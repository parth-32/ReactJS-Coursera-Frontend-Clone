import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { Link, useHistory } from "react-router-dom";
import { Close } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { authAction } from "../../store/auth_slice";
import "./login.scss";

const Login = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const [open, setOpen] = useState(true);

	const handleClose = () => {
		setOpen(false);
		history.push("/");
	};

	const formSubmitHandler = (e) => {
		e.preventDefault();
		dispatch(authAction.login({ token: "testing_token" }));
		history.push("/browse");
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
			</section>
		</Modal>
	);
};

export default Login;
