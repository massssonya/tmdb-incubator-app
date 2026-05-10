import { Container } from "@mui/material";
import { Search } from "../../../components/Search";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import { ROUTES } from "../../../routes/routes";
import styles from "./hero.styles.module.css";
export default function HeroSection() {
	const navigate = useNavigate();

	const formMethods = useForm(
		{ search: "" },
		(data) => navigate(`/${ROUTES.SEARCH}?query=${data.search}`),
		0,
		false
	);

	const reset = () => {
		formMethods.update("search", "");
	};

	return (
		<section
			className={styles.section}
			style={{
				backgroundImage:
					'linear-gradient(rgba(4, 21, 45, 0) 0%, rgb(18, 18, 18) 79.17%), url("http://image.tmdb.org/t/p/original/1x9e0qWonw634NhIsRdvnneeqvN.jpg")'
			}}
		>
			<Container className={styles.container}>
				<h1 className={styles.title}>Welcome</h1>
				<h2 className={styles.subtitle}>Browse highlighted titles from TMDB</h2>
				<Search
					fieldName="search"
					placeholder="Введите название фильма..."
					reset={reset}
					{...formMethods}
				/>
			</Container>
		</section>
	);
}
