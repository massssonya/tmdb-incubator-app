import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import MovieSectionLayout from "../../../../components/MovieSectionLayout";
import { MovieCard } from "../../../../components/MovieCard";
import { Button } from "../../../../components/UI/Button";

import { ROUTES } from "../../../../routes/routes";
import type {
	Movie,
	MovieCategoryType
} from "../../../../store/services/movies";

interface Props {
	title: string;
	category: MovieCategoryType;
	movies: Movie[];
	isLoading?: boolean;
}

export function MovieCategorySection({
	title,
	category,
	movies
}: Props) {
	const navigate = useNavigate();

	const handleNavigate = useCallback(() => {
		navigate(`${ROUTES.CATEGORIES}?category=${category}`);
	}, [navigate, category]);

	return (
		<MovieSectionLayout>
			<MovieSectionLayout.Header>
				<h2>{title}</h2>

				<Button variant="outline" size="sm" onClick={handleNavigate}>
					View more
				</Button>
			</MovieSectionLayout.Header>

			<MovieSectionLayout.Content>
				{movies.slice(0, 6).map((movie) => (
					<MovieCard key={movie.id} {...movie} />
				))}
			</MovieSectionLayout.Content>
		</MovieSectionLayout>
	);
}
