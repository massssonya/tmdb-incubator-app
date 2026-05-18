import styles from "./styles.module.css";
import { MOVIE_CATEGORIES } from "../../../../lib/constants/movieSections";
import { MovieCategorySectionContainer } from "./MovieCategorySectionContainer";

export function MovieSection() {
	return (
		<div className={styles.sections}>
			{MOVIE_CATEGORIES.map((section) => (
				<MovieCategorySectionContainer
					key={section.category}
					category={section.category}
					title={section.title}
				/>
			))}
		</div>
	);
}
