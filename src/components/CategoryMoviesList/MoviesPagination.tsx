import styles from "./styles.module.css";
import { PaginationComponent } from "../UI/Pagination";

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
		<div className={styles.pagination}>
			<PaginationComponent
				count={totalPages}
				page={page}
				size="large"
				shape="rounded"
				disabled={disabled}
				onChange={(_, page) => onChange(page)}
			/>
		</div>
	);
}
