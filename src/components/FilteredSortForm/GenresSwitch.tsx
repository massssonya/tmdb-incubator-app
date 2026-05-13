import type { Genre } from "../../store/services/movies";
import { Button } from "../UI/Button";
import styles from "./styles.module.css";

interface Props {
	genresData: Genre[];
	formGenres: number[];
	toggle: (genreId: number) => void;
}
export const GenresSwitch = ({ genresData, formGenres, toggle }: Props) => {
	return (
		<div className={styles["genres-container"]}>
			{genresData.map((genre) => {
				const isActive = formGenres.includes(genre.id);

				return (
					<Button
						type="button"
						key={genre.id}
						size="sm"
						fullWidth={false}
						variant={isActive ? "primary" : "outline"}
						onClick={() => toggle(genre.id)}
					>
						{genre.name}
					</Button>
				);
			})}
		</div>
	);
};
