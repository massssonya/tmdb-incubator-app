import { useAppSelector } from "../../hooks/useStoreHooks";
import { MovieCard } from "../MovieCard";
import MovieSectionLayout from "../MovieSectionLayout";
import styles from "./styles.module.css";

export function FavoritesMovies() {
	const movies = useAppSelector((state) => state.favorites.movies);
	return (
		<>
			{movies.length === 0 ? (
				<p className={styles.text}>
					Add movies to favorites to see them on this page.
				</p>
			) : (
				<MovieSectionLayout>
					<MovieSectionLayout.Header>
						<h2>Favorite Movies</h2>
					</MovieSectionLayout.Header>
					<MovieSectionLayout.Content>
						{movies.map((movie) => (
							<MovieCard key={movie.id} {...movie} />
						))}
					</MovieSectionLayout.Content>
				</MovieSectionLayout>
			)}
		</>
	);
}
