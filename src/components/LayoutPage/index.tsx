import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { useTheme } from "../../hooks/useTheme";
import { Footer } from "../Footer";
import styles from "./styles.module.css";

export function Layout() {
	useTheme();

	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.main}>
				<div className={styles.wrapper}>
					<div className={styles.container}>
						<Outlet />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
