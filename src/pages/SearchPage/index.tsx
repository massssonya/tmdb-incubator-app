import { SectionLayout } from "../../components/SectionLayout";
import { Search } from "../../components/Search";

import { useSearchMoviesPage } from "./useSearchMoviesPage";

import styles from "./styles.module.css";
import { MoviesList } from "./MoviesList";

export function SearchPage() {
	const searchMovies = useSearchMoviesPage();

	return (
		<SectionLayout>
			<h1>Search Results</h1>

			<Search
				value={searchMovies.form.search}
				onChange={searchMovies.updateSearch}
				submit={searchMovies.handleSubmit}
				reset={searchMovies.handleReset}
				placeholder="Введите название фильма..."
			/>

			{searchMovies.query && (
				<h2 className={styles.query}>Results for "{searchMovies.query}"</h2>
			)}

			{searchMovies.showInitialMessage && (
				<p className={styles.info}>Enter a movie title to start searching.</p>
			)}

			{searchMovies.isError && (
				<p className={styles.info}>Something went wrong.</p>
			)}

			{searchMovies.showNoResults && (
				<p className={styles.info}>No results found.</p>
			)}

			<MoviesList {...searchMovies} />
		</SectionLayout>
	);
}
