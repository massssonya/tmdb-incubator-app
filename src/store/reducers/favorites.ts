import {
	createSlice,
	type PayloadAction
} from "@reduxjs/toolkit";

interface FavoritesState {
	movieIds: number[];
}

const initialState: FavoritesState = {
	movieIds: JSON.parse(
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
			action: PayloadAction<number>
		) => {
			const movieId = action.payload;

			const exists =
				state.movieIds.includes(movieId);

			if (exists) {
				state.movieIds =
					state.movieIds.filter(
						(id) => id !== movieId
					);
			} else {
				state.movieIds.push(movieId);
			}
		}
	}
});

export const { toggleFavorite } =
	favorites.actions;

export default favorites.reducer;
