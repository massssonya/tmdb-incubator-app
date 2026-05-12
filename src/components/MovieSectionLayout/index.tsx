import type { ReactNode } from "react";

import styles from "./styles.module.css";

interface Props {
	title: string;

	isLoading?: boolean;

	onViewMore?: () => void;

	skeleton?: ReactNode;

	children: ReactNode;
}

export const MovieSectionLayout = ({
	title,
	isLoading,
	onViewMore,
	skeleton,
	children
}: Props) => {
	return (
		<section className={styles.section}>
			<div className={styles.header}>
				<h2>{title}</h2>

				{onViewMore && (
					<button onClick={onViewMore}>
						View more
					</button>
				)}
			</div>

			<div className={styles.grid}>
				{isLoading
					? skeleton
					: children}
			</div>
		</section>
	);
};
