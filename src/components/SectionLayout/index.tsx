import styles from "./styles.module.css";

interface Props {
	children: React.ReactNode;
	withPadding?: boolean;
}

export function SectionLayout({ children, withPadding = true }: Props) {
	return (
		<section
			className={`${styles.section} ${withPadding ? styles.hasPadding : ""}`}
		>
			{children}
		</section>
	);
}
