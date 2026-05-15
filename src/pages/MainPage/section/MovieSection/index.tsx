import { useGetMoviesByCategoryQuery } from "../../../../store/services/movies/api";

import styles from "./styles.module.css";
import { MovieCard } from "../../../../components/MovieCard";
import MovieSectionLayout from "../../../../components/MovieSectionLayout";
import { MOVIE_CATEGORIES } from "../../../../lib/constants/movieSections";
import type { MovieCategoryType } from "../../../../store/services/movies/types";

export const MovieSection = () => {
	return (
		<div className={styles.sections}>
			{MOVIE_CATEGORIES.map((section) => (
				<MovieCategory
					key={section.category}
					title={section.title}
					category={section.category}
				/>
			))}
		</div>
	);
};

interface MovieCategoryProps {
	title: string;
	category: MovieCategoryType;
}

const MovieCategory = ({ title, category }: MovieCategoryProps) => {
	const { data } = useGetMoviesByCategoryQuery({
		category
	});

	return (
		<MovieSectionLayout>
			<MovieSectionLayout.Header>
				<h2>{title}</h2>
			</MovieSectionLayout.Header>
			<MovieSectionLayout.Content>
				{data?.results.slice(0, 6).map((movie) => (
					<MovieCard key={movie.id} {...movie} />
				))}
			</MovieSectionLayout.Content>
		</MovieSectionLayout>
	);
};
