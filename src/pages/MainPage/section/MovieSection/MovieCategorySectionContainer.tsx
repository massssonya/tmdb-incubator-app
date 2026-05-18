import type { MovieCategoryType } from "../../../../store/services/movies";
import { useGetMoviesByCategoryQuery } from "../../../../store/services/movies/api";

import { MovieCategorySection } from "./MovieCategorySection";

interface Props {
	title: string;
	category: MovieCategoryType;
}

export function MovieCategorySectionContainer({
	title,
	category
}: Props) {
	const {
		data,
		isLoading
	} = useGetMoviesByCategoryQuery({
		category
	});

	return (
		<MovieCategorySection
			title={title}
			category={category}
			movies={data?.results ?? []}
			isLoading={isLoading}
		/>
	);
}
