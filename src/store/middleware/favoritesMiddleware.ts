import type { Middleware } from "@reduxjs/toolkit";
import { toggleFavorite } from "../reducers/favorites";

const FAVORITES_KEY = "favorites_movies";

export const favoritesMiddleware: Middleware =
	(store) => (next) => (action) => {
		const result = next(action);

		if (toggleFavorite.match(action)) {
			const state = store.getState();
			localStorage.setItem(
				FAVORITES_KEY,
				JSON.stringify(state.favorites.movieIds)
			);
		}

		return result;
	};
