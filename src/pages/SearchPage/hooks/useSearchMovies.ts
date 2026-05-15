import { useMemo } from "react";
import { useSearchMoviesQuery } from "../../../store/services/movies";

export function useSearchMovies(query: string, page: number) {
	const { data, isLoading, isFetching, isError } = useSearchMoviesQuery(
		{
			query,
			page
		},
		{
			skip: !query
		}
	);

	const movies = useMemo(() => {
		if (!query) return [];

		return data?.results ?? [];
	}, [query, data]);

	const totalPages = data?.total_pages ?? 1;

	const showInitialMessage = !query;

	const showNoResults = query && !isLoading && !isFetching && !movies.length;

	const showMovies = movies.length > 0;

	const showPagination = showMovies && totalPages > 1;

	return {
		movies,
		totalPages,

		isLoading,
		isFetching,
		isError,

		showMovies,
		showNoResults,
		showInitialMessage,
		showPagination
	};
}
