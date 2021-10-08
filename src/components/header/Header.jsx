import React, { useState, useRef } from "react";
import {
	KeyboardArrowDown,
	NotificationsOutlined,
	Search,
} from "@mui/icons-material";
import ExploreSection from "../explore/ExploreSection";
import "./Header.css";
// import Login from "../login/Login";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../../store/auth_slice";

const Header = () => {
	// Redux Auth
	const { isAuthenticated, userData } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const history = useHistory();

	//Search ref
	const searchRef = useRef();

	// For Explore Section
	const [isHover, setIsHover] = useState(false);
	const onCloseExplore = (e) => {
		e.preventDefault();
		setIsHover(false);
	};

	const signUpHandler = () => {
		history.push("/signup");
	};

	const logoutHandler = () => {
		dispatch(authAction.logout());
	};

	//search handler
	const searchButtonHandler = (e) => {
		e.preventDefault();
		const searchValue = searchRef.current.value;
		// console.log(searchValue);
		searchRef.current.value = "";
		history.push(`/course?search=${searchValue}`);
	};
	return (
		<>
			<div className="navbar">
				<div className="symbol">
					<span className="title">coursera</span>
				</div>

				{/* Explore Button */}
				<div className="category">
					<button
						onClick={() => setIsHover((state) => !state)}
						className="category_button"
					>
						Explore
						<KeyboardArrowDown className="icons_down" />
					</button>
				</div>

				{/* Search Bar */}
				<div className="search">
					<input
						placeholder="What do you want to learn?"
						className="search_input"
						type="text"
						ref={searchRef}
						required
					/>
					<button
						className="search_button"
						onClick={searchButtonHandler}
					>
						<Search className="search_icon" />
					</button>
				</div>

				{/* Partnership  */}
				<div className="options">
					<p className="option_p">For Enterprise</p>
					<p className="option_p">For Students</p>
					<span>
						<NotificationsOutlined className="notification_icon" />
					</span>
				</div>
				<div className="vertical_line"></div>

				{/* DropDown Menus */}
				{!isAuthenticated && (
					<>
						<Link to="/login" className="loginLink">
							Login
						</Link>
						<button
							onClick={signUpHandler}
							className="category_button joinForFree"
						>
							Join for Free
						</button>
					</>
				)}
				{isAuthenticated && (
					<div className="dropdown_wrapper">
						<div className="profile">
							<div className="profile_logo">
								<img
									src="https://www.w3schools.com/howto/img_avatar.png"
									alt="logo"
								/>
							</div>
							<span className="username">{userData.name}</span>
							<KeyboardArrowDown className="dropdown" />
						</div>
						<div className="dropdown_content">
							<ul>
								<li>
									<Link to="/my_course">My Courses</Link>
								</li>
								<li>
									<Link to="/profile">Profile</Link>
								</li>
								<li>
									<Link to="/my_course">Settings</Link>
								</li>
								<li>
									<Link to="/my_course">Accomplishment</Link>
								</li>
								<li>
									<Link to="/" onClick={logoutHandler}>
										Logout
									</Link>
								</li>
							</ul>
						</div>
					</div>
				)}
			</div>
			{isHover && <ExploreSection closeExploreHandler={onCloseExplore} />}
		</>
	);
};

export default Header;
