import {
	createSlice,
	type PayloadAction
} from "@reduxjs/toolkit";
import type { MovieCardType } from "./types";

interface FavoritesState {
	movies: MovieCardType[];
}

const initialState: FavoritesState = {
	movies: JSON.parse(
		localStorage.getItem("favorites_movies") ??
			"[]"
	)
};

const favorites = createSlice({
	name: "favorites",

	initialState,

	reducers: {
		toggleFavorite: (
			state,
			action: PayloadAction<MovieCardType>
		) => {
			const newMovie = action.payload;

			const exists =
				state.movies.find(
					(movie) => movie.id === newMovie.id
				);

			if (exists) {
				state.movies =
					state.movies.filter(
						(movie) => movie.id !== newMovie.id
					);
			} else {
				state.movies.push(newMovie);
			}
		}
	}
});

export const { toggleFavorite } =
	favorites.actions;

export default favorites.reducer;
