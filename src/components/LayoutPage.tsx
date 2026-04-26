import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { useAppSelector } from "../hooks/useStoreHooks";
import { useEffect } from "react";

export function Layout() {
	const theme = useAppSelector((state) => state.theme.value);
	useEffect(() => {
		const root = window.document.documentElement;

		if (theme === "auto") {
			root.removeAttribute("data-theme");
		} else {
			root.setAttribute("data-theme", theme);
		}
	}, [theme]);

	return (
		<div className="app-wrapper">
			<Header />
			<main>
				<Outlet />
			</main>
			<footer>Подвал сайта</footer>
		</div>
	);
}
