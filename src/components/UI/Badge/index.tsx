import styles from "./style.module.css";

interface Props {
	children: React.ReactNode;
	className?: string;
	variant?: VariantType;
}

export type VariantType = "neutral" | "positive" | "negative";

export const Badge = ({ children, variant, className }: Props) => {
	return (
		<span
			className={`${className} ${styles.badge} ${styles[variant ?? "current"]}`}
		>
			{children}
		</span>
	);
};
