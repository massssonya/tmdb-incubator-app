import type {
	CSSProperties,
	ReactNode
} from "react";

import styles from "./styles.module.css";

interface Props {
	children: ReactNode;
	columns?: number;
}

export function Content({
	children,
	columns = 6
}: Props) {
	return (
		<div
			className={styles.grid}
			style={
				{
					"--columns": columns
				} as CSSProperties
			}
		>
			{children}
		</div>
	);
}
