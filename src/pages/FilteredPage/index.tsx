import { SectionLayout } from "../../components/SectionLayout";
import { FilteredSortForm } from "../../components/FilteredSortForm";
import { MovieCard } from "../../components/MovieCard";
import MovieSectionLayout from "../../components/MovieSectionLayout";
import { useDiscoverMoviesFilters } from "./useDiscoverMoviesFilters";

import styles from "./styles.module.css";
import { PaginationComponent } from "../../components/UI/Pagination";

export function FilteredMoviesPage() {
	const { data, formParams } = useDiscoverMoviesFilters();

	return (
		<SectionLayout>
			<div className={styles.container}>
				<div className={styles.formContainer}>
					<FilteredSortForm {...formParams} />
				</div>
				<MovieSectionLayout>
					<MovieSectionLayout.Content columns={5}>
						{data?.results.map((movie) => (
							<MovieCard key={movie.id} {...movie} />
						))}
					</MovieSectionLayout.Content>
					<MovieSectionLayout.Footer>
						<PaginationComponent
							count={data?.total_pages}
							page={formParams.formState.page}
							size="large"
							shape="rounded"
							disabled={!data}
							onChange={(_, page) => {
								formParams.updatePage(page);
							}}
						/>
					</MovieSectionLayout.Footer>
				</MovieSectionLayout>
			</div>
		</SectionLayout>
	);
}
