import { MOVIE_CATEGORIES } from "../../lib/constants/movieSections";
import type { MovieCategoryType } from "../../store/services/movies";

import { Button } from "../UI/Button";
import styles from "./styles.module.css";

interface Props {
	selectedCategory: MovieCategoryType;
	onChange: (category: MovieCategoryType) => void;
}

export function MovieCategoryTabs({ selectedCategory, onChange }: Props) {
	return (
		<div className={styles.categorySwitchContainer}>
			{MOVIE_CATEGORIES.map((categoryItem) => {
				const isActive = selectedCategory === categoryItem.category;

				return (
					<Button
						key={categoryItem.category}
						variant={isActive ? "primary" : "outline"}
						size="sm"
						onClick={() => onChange(categoryItem.category)}
					>
						{categoryItem.title}
					</Button>
				);
			})}
		</div>
	);
}
