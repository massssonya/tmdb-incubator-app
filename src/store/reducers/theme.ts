import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
	value: "light" | "dark" | "auto";
}

const initialState: ThemeState = {
	value: (localStorage.getItem("theme") as ThemeState["value"]) || "auto"
};

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<ThemeState["value"]>) => {
			state.value = action.payload;
			localStorage.setItem("theme", action.payload);
		},
		toggleTheme: (state) => {
			state.value = state.value === "light" ? "dark" : "light";
			localStorage.setItem("theme", state.value);
		}
	}
});

export const { setTheme, toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
