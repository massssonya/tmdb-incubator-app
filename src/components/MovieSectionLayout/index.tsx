import type { CSSProperties, ReactNode } from "react";

import styles from "./styles.module.css";

interface Props {
	title?: string;
	isLoading?: boolean;
	onViewMore?: () => void;
	skeleton?: ReactNode;
	children: ReactNode;
	columns?: number;
}

export const MovieSectionLayout = ({
	title,
	isLoading,
	onViewMore,
	skeleton,
	children,
	columns = 6
}: Props) => {
	return (
		<section className={styles.section}>
			{(title || onViewMore) && (
				<div className={styles.header}>
					{title && <h2>{title}</h2>}

					{onViewMore && <button onClick={onViewMore}>View more</button>}
				</div>
			)}

			<div
				className={styles.grid}
				style={
					{
						"--columns": columns
					} as CSSProperties
				}
			>
				{isLoading ? skeleton : children}
			</div>
		</section>
	);
};
