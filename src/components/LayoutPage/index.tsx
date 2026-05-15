import { Outlet } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import styles from "./styles.module.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { GlobalLoader } from "../GlobalLoader";

export function Layout() {
	useTheme();

	return (
		<div className={styles.layout}>
			<Header />
			<GlobalLoader />
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
