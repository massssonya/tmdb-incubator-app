import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import styles from "./styles.module.css";

export function NotFound() {
	return (
		<div className={styles.container}>
			<div className={styles.img}>
				<img src="./not-found.webp" alt="Страница не найдена" />
			</div>
			<h1 className={styles.title}>404</h1>
			<p className={styles.text}>
				Page not found. We can’t find what you’re looking for
			</p>
			<div className={styles.actions}>
				<Link className={styles.link} to={ROUTES.MAIN}>To main page</Link>
			</div>
		</div>
	);
}
