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

	const { form, update, reset } = useForm<FormState>(
		initialState,
		(data) => {
			console.log("Данные отправлены:", data);
		},
		200
	);

	const toggleGenre = (genreId: number) => {
		const isSelected = form.genres.includes(genreId);
		if (isSelected) {
			update(
				"genres",
				form.genres.filter((id) => id !== genreId)
			);
			return;
		}
		update("genres", [...form.genres, genreId]);
	};

	const updateSelectSortBy = (value: SortValue) => {
		update("sort", value as SortValue);
	};

	const updateRating = (value: [number, number]) => update("rating", value);

	return {
		toggleGenre,
		genres: data?.genres || [],
		form,
		updateSelectSortBy,
		updateRating,
		reset
	};
}
