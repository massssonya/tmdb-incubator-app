import type { ReactNode } from "react";

import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

import styles from "./styles.module.css";

interface Props {
	children: ReactNode;
}

function MovieSectionLayout({
	children
}: Props) {
	return (
		<section className={styles.section}>
			{children}
		</section>
	);
}

MovieSectionLayout.Header = Header;
MovieSectionLayout.Content = Content;
MovieSectionLayout.Footer = Footer;

export default MovieSectionLayout;
