import type { Movie } from "../../store/services/types";
import { MovieCard } from "../MovieCard";

import { MovieSectionLayout } from "../MovieSectionLayout";

interface Props {
	title: string;
	movies: Movie[];
	isLoading: boolean;
}

export function MoviesGrid({ title, movies, isLoading }: Props) {
	return (
		<MovieSectionLayout title={title} columns={5} isLoading={isLoading}>
			{movies.map((movie) => (
				<MovieCard key={movie.id} {...movie} />
			))}
		</MovieSectionLayout>
	);
}
