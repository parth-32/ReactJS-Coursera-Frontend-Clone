import { createSlice } from "@reduxjs/toolkit";

var token;
var isAuthenticated;
if (
	localStorage.getItem("token") === undefined ||
	localStorage.getItem("token") === false ||
	localStorage.getItem("token") === null
) {
	token = localStorage.removeItem("token");
	token = null;
	isAuthenticated = false;
} else {
	token = localStorage.getItem("token");
	isAuthenticated = true;
}

const initialState = {
	token: token,
	isAuthenticated: isAuthenticated,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login(state, action) {
			localStorage.setItem("token", action.payload.token);
			state.token = action.payload.token;
			state.isAuthenticated = true;
		},
		signup(state, action) {
			localStorage.setItem("token", action.payload.token);
			state.token = action.payload.token;
			state.isAuthenticated = true;
		},
		logout(state) {
			localStorage.removeItem("token");
			state.token = null;
			state.isAuthenticated = false;
		},
	},
});

export const authAction = authSlice.actions;

export default authSlice.reducer;
