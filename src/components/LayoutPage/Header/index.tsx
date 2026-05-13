import { Link, NavLink } from "react-router-dom";
import { Brightness3 as Moon, Brightness7 as Sun } from "@mui/icons-material";

import styles from "./style.module.css";
import { ROUTES } from "../../../routes/routes";
import { useAppDispatch, useAppSelector } from "../../../hooks/useStoreHooks";
import { toggleTheme } from "../../../store/reducers/theme";

export function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.inner}>
				<Link to="/" className={styles.logo}>
					<img src="/logo.svg" alt="logo" />
				</Link>
				<nav className={styles.nav}>
					<HeaderNavLink to={ROUTES.MAIN}>Main</HeaderNavLink>
					<HeaderNavLink to={ROUTES.CATEGORIES}>Category movies</HeaderNavLink>
					<HeaderNavLink to={ROUTES.FILTERED}>Filtered movies</HeaderNavLink>
					<HeaderNavLink to={ROUTES.SEARCH}>Search</HeaderNavLink>
					<HeaderNavLink to={ROUTES.FAVORITES}>Favorites</HeaderNavLink>
				</nav>
				<ThemeButton />
			</div>
		</header>
	);
}

const HeaderNavLink = ({
	to,
	children
}: {
	to: string;
	children: React.ReactNode;
}) => {
	return (
		<>
			<NavLink
				to={to}
				className={({ isActive }) =>
					isActive ? `${styles.link} ${styles.active}` : styles.link
				}
			>
				{children}
			</NavLink>
			<Separator />
		</>
	);
};

const Separator = () => {
	return <span className={styles.separator}>|</span>;
};

const ThemeButton = () => {
	const theme = useAppSelector((state) => state.theme.value);
	const dispatch = useAppDispatch();

	return (
		<button
			onClick={() => dispatch(toggleTheme())}
			className={styles.themeButton}
		>
			{theme === "light" ? <Moon /> : <Sun className={styles.light} />}
		</button>
	);
};
