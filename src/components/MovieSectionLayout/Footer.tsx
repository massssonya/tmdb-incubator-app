import type { ReactNode } from "react";

import styles from "./styles.module.css";

interface Props {
	children: ReactNode;
}

export function Footer({
	children
}: Props) {
	return (
		<div className={styles.footer}>
			{children}
		</div>
	);
}
