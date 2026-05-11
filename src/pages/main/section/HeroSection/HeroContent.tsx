import { Container } from "@mui/material";

import { useNavigate } from "react-router-dom";


import styles from "./styles.module.css";
import { useForm } from "../../../../hooks/useForm";
import { ROUTES } from "../../../../routes/routes";
import { Search } from "../../../../components/Search";

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

	const formMethods = useForm(
		{ search: "" },
		(data) => navigate(`/${ROUTES.SEARCH}?query=${data.search}`),
		0,
		false
	);

	return (
		<Search
			fieldName="search"
			placeholder="Введите название фильма..."
			reset={() => formMethods.update("search", "")}
			{...formMethods}
		/>
	);
};
