import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/theme";
import favoritesReducer from "./reducers/favorites";
import { api } from "./services/api";
import { favoritesMiddleware } from "./middleware/favoritesMiddleware";

export const store = configureStore({
	reducer: {
		theme: themeReducer,
		favorites: favoritesReducer,
		[api.reducerPath]: api.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware, favoritesMiddleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
