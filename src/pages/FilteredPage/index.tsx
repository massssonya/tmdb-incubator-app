import { SectionLayout } from "../../components/SectionLayout";
import { FilteredSortForm } from "../../components/FilteredSortForm";
import { MovieCard } from "../../components/MovieCard";
import { MovieSectionLayout } from "../../components/MovieSectionLayout";
import { useDiscoverMoviesFilters } from "./useDiscoverMoviesFilters";

import styles from "./styles.module.css";

export function FilteredMoviesPage() {
	const { data, formParams } = useDiscoverMoviesFilters();

	return (
		<SectionLayout>
			<div className={styles.container}>
				<div className={styles.formContainer}>
					<FilteredSortForm {...formParams} />
				</div>
				<MovieSectionLayout columns={5}>
					{data?.results.map((movie) => (
						<MovieCard key={movie.id} {...movie} />
					))}
				</MovieSectionLayout>
			</div>
		</SectionLayout>
	);
}
