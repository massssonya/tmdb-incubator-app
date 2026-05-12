import { Link } from "react-router-dom";
import { Favorite } from "@mui/icons-material";
import styles from "./styles.module.css";
import { Badge, type VariantType } from "../UI/Badge";
import { useAppDispatch, useAppSelector } from "../../hooks/useStoreHooks";
import { toggleFavorite } from "../../store/services/favorites";
import type { MovieCardType } from "../../store/services/types";

export function MovieCard({ id, poster_path, title, vote_average }: MovieCardType) {
	const dispatch = useAppDispatch();
	const isFavorite = useAppSelector((state) =>
		state.favorites.movies.find((movie) => movie.id === id)
	);
	const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
	const variant: VariantType =
		vote_average >= 7 ? "positive" : vote_average >= 5 ? "neutral" : "negative";
	const rating = vote_average.toFixed(1);

	return (
		<article className={styles.card}>
			<div className={styles.container}>
				<Link className={styles.posterLink} to={`/movie/${id}`}>
					<img className={styles.poster} src={poster} alt={title} />
					<Badge variant={variant} className={styles.ratingBadge}>
						{rating}
					</Badge>
				</Link>
				<button
					aria-label="Add to favorites"
					title="Add to favorites"
					className={`${styles.likeButton} ${isFavorite ? styles.favorite : ""}`}
					onClick={() =>
						dispatch(toggleFavorite({ id, poster_path, title, vote_average }))
					}
				>
					<Favorite color="inherit" />
				</button>
			</div>
			<Link to={`/movie/${id}`}>{title}</Link>
		</article>
	);
}
