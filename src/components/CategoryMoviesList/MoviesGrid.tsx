import type { Movie } from "../../store/services/movies";
import { MovieCard } from "../MovieCard";

import MovieSectionLayout from "../MovieSectionLayout";

interface Props {
	title: string;
	movies: Movie[];
	// isLoading: boolean;
}

export function MoviesGrid({ title, movies }: Props) {
	return (
		<MovieSectionLayout>
			<MovieSectionLayout.Header>
				<h2>{title}</h2>
			</MovieSectionLayout.Header>
			<MovieSectionLayout.Content columns={5}>
				{movies.map((movie) => (
					<MovieCard key={movie.id} {...movie} />
				))}
			</MovieSectionLayout.Content>
		</MovieSectionLayout>
	);
}
