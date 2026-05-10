import { Container, Skeleton } from "@mui/material";

import styles from "./hero.styles.module.css";

export const HeroSkeleton = () => {
	return (
		<>
			<Skeleton
				variant="rectangular"
				width="100%"
				height="100%"
				className={styles.backgroundSkeleton}
			/>

			<Container className={styles.container}>
				<Skeleton variant="text" width={320} height={80} />

				<Skeleton variant="text" width={420} height={50} />

				<Skeleton variant="rounded" width="50%" height={56} />
			</Container>
		</>
	);
};
