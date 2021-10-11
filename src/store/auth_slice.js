import { createSlice } from "@reduxjs/toolkit";

var token;
var isAuthenticated;
var userData;

if (
	localStorage.getItem("token") === undefined ||
	localStorage.getItem("token") === false ||
	localStorage.getItem("token") === null
) {
	localStorage.removeItem("token");
	localStorage.removeItem("user");
	token = null;
	isAuthenticated = false;
	userData = {};
} else {
	token = localStorage.getItem("token");
	isAuthenticated = true;
	userData = JSON.parse(localStorage.getItem("user"));
}

const initialState = {
	token: token,
	isAuthenticated: isAuthenticated,
	userData,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login(state, action) {
			localStorage.setItem("token", action.payload.token);
			localStorage.setItem("user", JSON.stringify(action.payload.user));
			state.token = action.payload.token;
			state.isAuthenticated = true;
			state.userData = action.payload.user;
		},
		signup(state, action) {
			localStorage.setItem("token", action.payload.token);
			localStorage.setItem("user", JSON.stringify(action.payload.user));
			state.token = action.payload.token;
			state.isAuthenticated = true;
			state.userData = action.payload.user;
		},
		logout(state) {
			localStorage.removeItem("token");
			localStorage.removeItem("user");
			state.token = null;
			state.isAuthenticated = false;
		},
	},
});

export const authAction = authSlice.actions;

export default authSlice.reducer;
