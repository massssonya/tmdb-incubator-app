import { Skeleton } from "@mui/material";

import styles from "./styles.module.css";

export const MovieSkeleton = () => {
	return (
		<>
			{Array.from({ length: 6 }).map((_, index) => (
				<Skeleton
					key={index}
					className={styles.skeleton}
					variant="rectangular"
					width={'100%'}
					height={250}
				/>
			))}
		</>
	);
};
