import { MovieCard } from "../../components/MovieCard";
import MovieSectionLayout from "../../components/MovieSectionLayout";
import { MovieSkeleton } from "../../components/MovieSkeleton";
import type { Movie } from "../../store/services/movies";
import { PaginationComponent } from "../../components/UI/Pagination";

interface Props {
	isLoading: boolean;
	isFetching: boolean;
	movies: Movie[];
	totalPages: number;
	currentPage: number;
	showMovies: boolean;
	showPagination: boolean;
	handlePageChange: (page: number) => void;
}

export const MoviesList = ({
	currentPage,
	handlePageChange,
	isFetching,
	isLoading,
	movies,
	showMovies,
	showPagination,
	totalPages
}: Props) => {
	return (
		<MovieSectionLayout>
			<MovieSectionLayout.Content columns={5}>
				{(isLoading || isFetching) && <MovieSkeleton length={10} />}

				{showMovies &&
					movies.map((movie) => <MovieCard key={movie.id} {...movie} />)}
			</MovieSectionLayout.Content>

			{showPagination && (
				<MovieSectionLayout.Footer>
					<PaginationComponent
						count={totalPages}
						page={currentPage}
						color="primary"
						size="large"
						shape="rounded"
						disabled={isFetching}
						onChange={(_, page) => handlePageChange(page)}
					/>
				</MovieSectionLayout.Footer>
			)}
		</MovieSectionLayout>
	);
};
