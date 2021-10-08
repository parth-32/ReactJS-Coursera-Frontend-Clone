import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components//header/Header";

import CoursePage from "./pages/CoursePage";
import BrowsePage from "./pages/BrowsePage";
import LearnPage from "./pages/LearnPage";
import LecturePage from "./pages/LecturePage";
import MyCoursePage from "./pages/MyCoursePage";

import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";

function App() {
	// auth states
	const { isAuthenticated } = useSelector((state) => state.auth);

	return (
		<React.Fragment>
			<BrowserRouter>
				<Switch>
					<div className="App">
						<Header />
						<Route path="/course" exact>
							<CoursePage />
						</Route>
						{/* <Route path="/course/:course">
							<CoursePage />
						</Route> */}
						<Route path="/browse" exact>
							<BrowsePage />
						</Route>
						<Route path="/login" exact>
							{!isAuthenticated && <Login />}
							{isAuthenticated && <Redirect to="/" />}
						</Route>
						<Route path="/signup" exact>
							{!isAuthenticated && <SignUp />}
							{isAuthenticated && <Redirect to="/" />}
						</Route>
						<Route path="/learn/:course" exact>
							<LearnPage />
						</Route>
						<Route path="/lecture/:courseId" exact>
							{!isAuthenticated && <Login />}
							{isAuthenticated && <LecturePage />}
						</Route>
						<Route path="/lecture/:courseId/week/:weekId" exact>
							{!isAuthenticated && <Login />}
							{isAuthenticated && <LecturePage />}
						</Route>
						<Route path="/my_course" exact>
							{!isAuthenticated && <Login />}
							{isAuthenticated && (
								<MyCoursePage type="enrolled" />
							)}
						</Route>
						<Route path="/in_progress" exact>
							{!isAuthenticated && <Login />}
							{isAuthenticated && (
								<MyCoursePage type="in_progress" />
							)}
						</Route>
						<Route path="/completed" exact>
							{!isAuthenticated && <Login />}
							{isAuthenticated && (
								<MyCoursePage type="completed" />
							)}
						</Route>
						<Route path="/profile">
							{!isAuthenticated && <Login />}
							<ProfilePage />
						</Route>

						{/* <Route path="*">
							<Redirect to="/" />
						</Route> */}
					</div>
				</Switch>
			</BrowserRouter>
		</React.Fragment>
	);
}

export default App;
