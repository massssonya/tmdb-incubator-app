import { MOVIE_CATEGORIES } from "../../lib/constants/movieSections";
import type { MovieCategoryType } from "../../store/services/types";
import { Button } from "../UI/Button";
import styles from "./styles.module.css";

interface Props {
	selectedCategory: MovieCategoryType;
	onChange: (category: { title: string; category: MovieCategoryType }) => void;
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
						onClick={() => onChange(categoryItem)}
					>
						{categoryItem.title}
					</Button>
				);
			})}
		</div>
	);
}
