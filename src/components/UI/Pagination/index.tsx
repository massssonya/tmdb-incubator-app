import { Pagination, type PaginationProps } from "@mui/material";

import styles from "./styles.module.css";

export function PaginationComponent({ color = "primary", ...props }: PaginationProps) {
	return (
		<Pagination
			className={styles.pagination}
			color={color}
			{...props}
		/>
	);
}
