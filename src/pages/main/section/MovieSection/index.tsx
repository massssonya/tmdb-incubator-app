import { useGetMoviesByCategoryQuery } from "../../../../store/services/movies";
import type { MovieCategoryType } from "../../../../store/services/types";

import styles from "./styles.module.css";
import { MovieSkeleton } from "./MovieSkeleton";
import { MovieCard } from "../../../../components/MovieCard";

const sections: { title: string; category: MovieCategoryType }[] = [
	{ title: "Popular Movies", category: "popular" },
	{ title: "Top Rated Movies", category: "top_rated" },
	{ title: "Upcoming Movies", category: "upcoming" },
	{ title: "Now Playing", category: "now_playing" }
];

export const MovieSection = () => {
	return (
		<div className={styles.sections}>
			{sections.map((section) => (
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
		<section className={styles.section}>
			<div className={styles.header}>
				<h2>{title}</h2>
				<button>View more</button>
			</div>
			<div className={styles.grid}>
				{isLoading ? (
					<MovieSkeleton />
				) : (
					data?.results
						.slice(0, 6)
						.map((movie) => <MovieCard key={movie.id} {...movie} />)
				)}
			</div>
		</section>
	);
};
