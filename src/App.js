import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components//header/Header";
import CoursePage from "./pages/CoursePage";
import BrowsePage from "./pages/BrowsePage";
import LearnPage from "./pages/LearnPage";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import "./App.css";

function App() {
	// auth states
	const { isAuthenticated } = useSelector((state) => state.auth);

	return (
		<React.Fragment>
			<BrowserRouter>
				<Switch>
					<div className="App">
						<Header />
						<Route path="/course/:course">
							<CoursePage />
						</Route>
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
						<Route path="/learn/:course">
							<LearnPage />
						</Route>
						<Route path="*">
							<Redirect to="/" />
						</Route>
					</div>
				</Switch>
			</BrowserRouter>
		</React.Fragment>
	);
}

export default App;
