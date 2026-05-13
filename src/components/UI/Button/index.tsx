import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

export type ButtonVariant =
	| "primary"
	| "secondary"
	| "outline"
	| "ghost"
	| "danger";

export type ButtonSize =
	| "sm"
	| "md"
	| "lg";

interface Props
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant?: ButtonVariant;
	size?: ButtonSize;
	fullWidth?: boolean;
}

export const Button = ({
	children,
	variant = "primary",
	size = "md",
	fullWidth = false,
	className,
	disabled,
	...props
}: Props) => {
	return (
		<button
			className={clsx(
				styles.button,
				styles[variant],
				styles[size],
				fullWidth &&
					styles.fullWidth,
				disabled &&
					styles.disabled,
				className
			)}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	);
};
