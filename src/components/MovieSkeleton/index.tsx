import { Skeleton } from "@mui/material";

import styles from "./styles.module.css";

interface Props {
	length?: number;
}

export const MovieSkeleton = ({ length = 6 }: Props) => {
	return (
		<>
			{Array.from({ length }).map((_, index) => (
				<Skeleton
					key={index}
					className={styles.skeleton}
					variant="rectangular"
					width={"100%"}
					height={250}
				/>
			))}
		</>
	);
};
