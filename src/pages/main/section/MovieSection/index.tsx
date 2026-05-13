import { useGetMoviesByCategoryQuery } from "../../../../store/services/movies";
import type { MovieCategoryType } from "../../../../store/services/types";

import styles from "./styles.module.css";
import { MovieCard } from "../../../../components/MovieCard";
import { MovieSectionLayout } from "../../../../components/MovieSectionLayout";
import { MOVIE_CATEGORIES } from "../../../../lib/constants/movieSections";
import { MovieSkeleton } from "../../../../components/MovieSkeleton";

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
	const { data, isLoading } = useGetMoviesByCategoryQuery({
		category
	});

	return (
		<MovieSectionLayout
			title={title}
			isLoading={isLoading}
			skeleton={<MovieSkeleton />}
			onViewMore={() => {}}
		>
			{data?.results.slice(0, 6).map((movie) => (
				<MovieCard key={movie.id} {...movie} />
			))}
		</MovieSectionLayout>
	);
};
