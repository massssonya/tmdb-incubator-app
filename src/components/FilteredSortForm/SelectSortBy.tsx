import {
	Select,
	Stack,
	Typography,
	type SelectChangeEvent
} from "@mui/material";
import styles from "./styles.module.css";
import type React from "react";

type Props<T extends string> = {
	items: React.ReactNode[];
	sort: string;
	onChange: (value: T) => void;
};

export const SelectSortBy = <T extends string>({
	sort,
	onChange,
	items
}: Props<T>) => {
	const handleChange = (e: SelectChangeEvent) => {
		onChange(e.target.value as T);
	};
	return (
		<Stack
			className={styles["select-container"]}
			direction="row"
			sx={{
				justifyContent: "space-between",
				gap: "12px",
				alignItems: "center"
			}}
		>
			<Typography
				className={styles["input-label"]}
				id="filter-form-select-label"
			>
				Sort by
			</Typography>
			<Select
				name="sort"
				className={styles.select}
				labelId="filter-form-select-label"
				id="filter-form-select"
				value={sort}
				onChange={handleChange}
			>
				{items}
			</Select>
		</Stack>
	);
};
