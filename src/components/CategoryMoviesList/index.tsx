import { MovieCategoryTabs } from "./MovieCategoryTabs";

import { MoviesGrid } from "./MoviesGrid";

import { MoviesPagination } from "./MoviesPagination";
import { useCategoryMovies } from "./useCategoryMovies";

export function CategoryMoviesList() {
	const categoryMovies = useCategoryMovies();

	return (
		<>
			<MovieCategoryTabs
				selectedCategory={categoryMovies.selectedCategory.category}
				onChange={categoryMovies.changeCategory}
			/>

			<MoviesGrid
				title={categoryMovies.selectedCategory.title}
				movies={categoryMovies.movies}
				// isLoading={categoryMovies.isLoading}
			/>

			{!categoryMovies.isLoading && (
				<MoviesPagination
					page={categoryMovies.currentPage}
					totalPages={categoryMovies.totalPages}
					disabled={categoryMovies.isFetching}
					onChange={categoryMovies.changePage}
				/>
			)}
		</>
	);
}
