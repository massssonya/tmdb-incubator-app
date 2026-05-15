import type { ReactNode } from "react";

import styles from "./styles.module.css";

interface Props {
	children: ReactNode;
}

export function Header({
	children
}: Props) {
	return (
		<div className={styles.header}>
			{children}
		</div>
	);
}
