import { useMemo } from "react";
import { useFilteredSortForm } from "./useFilteredSortForm";
import { useDiscoverMoviesQuery, type DiscoverMoviesArgs } from "../../store/services/movies";

export function useDiscoverMoviesFilters() {
	const { debouncedFormState, ...formParams } = useFilteredSortForm();

	const queryParams = useMemo<DiscoverMoviesArgs>(
		() => ({
			page: debouncedFormState.page,
			sort_by: debouncedFormState.sort,
			vote_average_gte: debouncedFormState.rating[0],
			vote_average_lte: debouncedFormState.rating[1],
			with_genres: debouncedFormState.genres.join(",")

		}),
		[debouncedFormState]
	);

	const { data } = useDiscoverMoviesQuery(queryParams);

	return {
		formParams,
		data
	};
}
