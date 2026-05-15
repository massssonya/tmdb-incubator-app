import ClearIcon from "@mui/icons-material/Clear";

import styles from "./styles.module.css";
import { Button } from "../UI/Button";

interface SearchProps {
	value: string;
	onChange: (value: string) => void;
	submit: () => void;
	reset: () => void;
	placeholder?: string;
	buttonText?: string;
}

export function Search({
	value,
	onChange,
	submit,
	reset,
	placeholder = "Search...",
	buttonText = "Search"
}: SearchProps) {
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				submit();
			}}
			className={styles["search-form"]}
		>
			<div className={styles["search-container"]}>
				<input
					type="text"
					placeholder={placeholder}
					className={styles["search-input"]}
					value={value}
					onChange={(e) => onChange(e.target.value)}
				/>

				{value && (
					<button
						aria-label="Clear search"
						className={styles["search-input-reset"]}
						type="button"
						onClick={reset}
					>
						<ClearIcon className="icon" />
					</button>
				)}
			</div>

			<Button variant="action" disabled={!value} type="submit">
				{buttonText}
			</Button>
		</form>
	);
}
