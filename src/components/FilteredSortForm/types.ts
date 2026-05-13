import { MOVIE_FILTER_ITEMS } from "../../lib/constants/movieFilterItems";
import type { Genre } from "../../store/services/movies/types";

export type SortValue = (typeof MOVIE_FILTER_ITEMS)[number]["value"];

export interface FilterFormState {
	sort: SortValue;
	rating: [number, number];
	genres: number[];
}

export interface FilteredSortFormProps {
	formState: FilterFormState;
	reset: () => void;
	toggleGenre: (genreId: number) => void;
	updateSelectSortBy: (value: SortValue) => void;
	updateRating: (value: [number, number]) => void;
	genres: Genre[];
}
