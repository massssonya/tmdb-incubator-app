import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { useAppSelector } from "../../hooks/useStoreHooks";
import { useTheme } from "../../hooks/useTheme";
import { useLayoutEffect } from "react";
import { Footer } from "../Footer";
import styles from "./styles.module.css";

export function Layout() {
	useTheme()

	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.content}>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
