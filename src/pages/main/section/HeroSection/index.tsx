import styles from "./styles.module.css";
import { useMemo } from "react";
import { HeroSkeleton } from "./HeroSkeleton";
import { HeroContent } from "./HeroContent";
import { useGetMoviesByCategoryQuery } from "../../../../store/services/movies";
import { getRandomItem } from "../../../../lib/helpers";
import { getImageUrl } from "../../../../lib/getBackdropUrl";

export default function HeroSection() {
	const { data, isLoading, isError } = useGetMoviesByCategoryQuery({category: "popular"});

	const backdropPath = useMemo(() => {
		if (!data?.results.length) return null;

		return getRandomItem(data.results)?.backdrop_path ?? null;
	}, [data]);

	const backgroundImage = backdropPath
		? `
			linear-gradient(
				rgba(4, 21, 45, 0) 0%,
				rgb(18, 18, 18) 79.17%
			),
			url(${getImageUrl(backdropPath)})
		  `
		: undefined;

	if (isError) {
		return (
			<section className={styles.section}>
				<HeroContent isError />
			</section>
		);
	}

	return (
		<section
			className={styles.section}
			style={!isLoading ? { backgroundImage } : undefined}
		>
			{isLoading ? <HeroSkeleton /> : <HeroContent />}
		</section>
	);
}
