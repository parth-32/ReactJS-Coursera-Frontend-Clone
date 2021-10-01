import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	token: localStorage.getItem("token"),
	isAuthenticated: !!localStorage.getItem("token"),
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
