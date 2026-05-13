import { Pagination, Stack } from "@mui/material";
import styles from "./styles.module.css";

interface Props {
	page: number;
	totalPages: number;
	disabled?: boolean;
	onChange: (page: number) => void;
}

export function MoviesPagination({
	page,
	totalPages,
	disabled,
	onChange
}: Props) {
	return (
		<Stack spacing={2} className={styles.pagination}>
			<Pagination
				count={totalPages}
				page={page}
				color="primary"
				size="large"
				shape="rounded"
				disabled={disabled}
				onChange={(_, page) => onChange(page)}
			/>
		</Stack>
	);
}
