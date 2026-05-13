import { Box, Slider, Stack, Typography } from "@mui/material";

import styles from "./styles.module.css";

type Props = {
	minRating: number;
	maxRating: number;
	onChange: (value: [number, number]) => void;
};

export const RatingSlider = ({ maxRating, minRating, onChange }: Props) => {
	return (
		<Box>
			<Stack
				direction="row"
				sx={{
					justifyContent: "space-between",
					gap: "12px",
					alignItems: "center"
				}}
			>
				<Typography className={styles["input-label"]}>Rating</Typography>
				<Typography className={styles["input-label"]}>
					{minRating} - {maxRating}
				</Typography>
			</Stack>
			<Slider
				className={styles.slider}
				value={[minRating, maxRating]}
				step={0.1}
				min={0}
				max={10}
				onChange={(_, value) => onChange(value as [number, number])}
				disableSwap={true}
			/>
		</Box>
	);
};
