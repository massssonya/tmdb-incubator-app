import { useMemo } from "react";
import { MenuItem, Typography } from "@mui/material";
import { SelectSortBy } from "./SelectSortBy";
import { RatingSlider } from "./RatingSlider";

import { GenresSwitch } from "./GenresSwitch";
import { MOVIE_FILTER_ITEMS } from "../../lib/constants/movieFilterItems";
import { useFilteredSortForm } from "./useFilteredSortForm";
import { Button } from "../UI/Button";

import styles from "./styles.module.css";

export function FilteredSortForm() {
	const { toggleGenre, reset, form, updateSelectSortBy, updateRating, genres } =
		useFilteredSortForm();

	const selectMenuItems = useMemo(() => {
		return MOVIE_FILTER_ITEMS.map((item) => (
			<MenuItem key={item.value} value={item.value}>
				<Typography className={styles["select-item"]}>{item.label}</Typography>
			</MenuItem>
		));
	}, []);

	return (
		<form className={styles.container}>
			<h2 className={styles.title}>Filters / Sort</h2>

			<SelectSortBy
				items={selectMenuItems}
				sort={form.sort}
				onChange={updateSelectSortBy}
			/>

			<RatingSlider
				minRating={form.rating[0]}
				maxRating={form.rating[1]}
				onChange={updateRating}
			/>

			<GenresSwitch
				genresData={genres || []}
				formGenres={form.genres}
				toggle={toggleGenre}
			/>

			<Button
				type="button"
				size="md"
				fullWidth={false}
				onClick={reset}
				className={styles.resetButton}
			>
				Reset filters
			</Button>
		</form>
	);
}
