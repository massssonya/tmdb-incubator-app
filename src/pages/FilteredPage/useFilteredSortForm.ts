import { useCallback } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useForm } from "../../hooks/useForm";
import { MOVIE_FILTER_ITEMS } from "../../lib/constants/movieFilterItems";
import { useGetGenresQuery } from "../../store/services/movies";

export type SortValue = (typeof MOVIE_FILTER_ITEMS)[number]["value"];

interface FormState {
	sort: SortValue;
	rating: [number, number];
	genres: number[];
}

const initialState: FormState = {
	sort: MOVIE_FILTER_ITEMS[0].value,
	rating: [0, 10],
	genres: []
};

export function useFilteredSortForm() {
	const { data } = useGetGenresQuery();

	const { form, update, reset } = useForm<FormState>(initialState);

	const debouncedForm = useDebounce(form, 500);

	const toggleGenre = useCallback(
		(genreId: number) => {
			update(
				"genres",
				form.genres.includes(genreId)
					? form.genres.filter((id) => id !== genreId)
					: [...form.genres, genreId]
			);
		},
		[form.genres, update]
	);

	const updateSelectSortBy = (value: SortValue) => {
		update("sort", value);
	};

	const updateRating = (value: [number, number]) => update("rating", value);

	return {
		toggleGenre,
		genres: data?.genres ?? [],
		formState: form,
		debouncedFormState: debouncedForm,
		updateSelectSortBy,
		updateRating,
		reset
	};
}
