import { useGetPopularMoviesQuery } from "../../../store/services/popular";

import { getRandomItem } from "../../../lib/helpers";
import { getImageUrl } from "../../../lib/getImageUrl";

import styles from "./hero.styles.module.css";
import { useMemo } from "react";
import { HeroSkeleton } from "./HeroSkeleton";
import { HeroContent } from "./HeroContent";

export default function HeroSection() {
	const { data, isLoading, isError } = useGetPopularMoviesQuery();

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
