import { useMemo, useState } from "react";
import { MOVIE_CATEGORIES } from "../../lib/constants/movieSections";
import { useGetMoviesByCategoryQuery } from "../../store/services/movies";
import type { MovieCategoryType } from "../../store/services/types";

const INITIAL_PAGE = 1;

export function useCategoryMovies() {
	const [selectedCategory, setSelectedCategory] = useState(MOVIE_CATEGORIES[0]);

	const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);

	const { data, isLoading, isFetching } = useGetMoviesByCategoryQuery({
		category: selectedCategory.category,

		page: currentPage
	});

	const movies = data?.results ?? [];

	const totalPages = useMemo(() => {
		return data?.total_pages ?? 1;
	}, [data?.total_pages]);

	const changeCategory = (category: {
		title: string;
		category: MovieCategoryType;
	}) => {
		setSelectedCategory(category);
		setCurrentPage(INITIAL_PAGE);
	};

	const changePage = (page: number) => {
		setCurrentPage(page);
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	return {
		selectedCategory,
		currentPage,
		movies,
		totalPages,
		isLoading,
		isFetching,
		changeCategory,
		changePage
	};
}
