import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../../hooks/useForm";
import { ROUTES } from "../../../../routes/routes";
import { Search } from "../../../../components/Search";

import styles from "./styles.module.css";
interface HeroContentProps {
	isError?: boolean;
}

export const HeroContent = ({ isError }: HeroContentProps) => {
	return (
		<Container className={styles.container}>
			<h1 className={styles.title}>
				{isError ? "Something went wrong" : "Welcome"}
			</h1>

			{!isError && (
				<>
					<h2 className={styles.subtitle}>
						Browse highlighted titles from TMDB
					</h2>

					<HeroSearch />
				</>
			)}
		</Container>
	);
};

const HeroSearch = () => {
	const navigate = useNavigate();

	const formMethods = useForm({ search: "" });

	return (
		<Search
			value={formMethods.form.search}
			onChange={(value) => formMethods.update("search", value)}
			submit={() =>
				navigate(`/${ROUTES.SEARCH}?query=${formMethods.form.search}`)
			}
			reset={() => formMethods.reset()}
			buttonText="Search"
			placeholder="Введите название фильма..."
		/>
	);
};
