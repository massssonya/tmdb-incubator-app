import { Container, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { SectionLayout } from "../../components/SectionLayout";
import { Search } from "../../components/Search";

interface FormState {
	search: string;
}

export function SearchPage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get("query") || ("" as string);

	const formMethods = useForm<FormState>({ search: query });

	const handleSubmit = () => {
		setSearchParams({
			query: formMethods.form.search
		});
	};

	const handleReset = () => {
		setSearchParams({});
		formMethods.reset();
	};

	return (
		<SectionLayout>
			<h1>Search Results</h1>
			<Container disableGutters={true} sx={{ marginTop: "20px" }}>
				<Search
					value={formMethods.form.search}
					onChange={(value) => formMethods.update("search", value)}
					submit={handleSubmit}
					reset={handleReset}
					placeholder="Введите название фильма..."
				/>
			</Container>
			<Typography sx={{ marginTop: "20px" }}>
				Enter a movie title to start searching.
			</Typography>
		</SectionLayout>
	);
}
