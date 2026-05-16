import { useMemo } from "react";

import { MOVIE_CATEGORIES } from "../../../lib/constants/movieSections";

import { useGetMoviesByCategoryQuery } from "../../../store/services/movies/api";
import { useMovieCategoryParams } from "./useMovieCategoryParams";
import { useScrollToTop } from "./useScrollToTop";

export function useCategoryMovies() {
	const { category, page, changeCategory, changePage } =
		useMovieCategoryParams();

	const scrollToTop = useScrollToTop();

	const selectedCategory = useMemo(() => {
		return (
			MOVIE_CATEGORIES.find((item) => item.category === category) ??
			MOVIE_CATEGORIES[0]
		);
	}, [category]);

	const { data, isLoading, isFetching } = useGetMoviesByCategoryQuery({
		category,
		page
	});

	const movies = data?.results ?? [];

	const totalPages = data?.total_pages ?? 1;

	const handlePageChange = (page: number) => {
		changePage(page);

		scrollToTop();
	};

	return {
		selectedCategory,
		currentPage: page,
		movies,
		totalPages,
		isLoading,
		isFetching,
		changeCategory,
		changePage: handlePageChange
	};
}
