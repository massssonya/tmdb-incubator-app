import { useSearchForm } from "./hooks/useSearchForm";
import { useSearchMovies } from "./hooks/useSearchMovies";
import { useSearchPagination } from "./hooks/useSearchPagination";
import { useSearchQueryParams } from "./hooks/useSearchQueryParams";

export function useSearchMoviesPage() {
	const { query, setQuery } = useSearchQueryParams();

	const { currentPage, changePage, resetPage } = useSearchPagination();

	const formMethods = useSearchForm(query);

	const moviesState = useSearchMovies(query, currentPage);

	const handleSubmit = () => {
		resetPage();

		setQuery(formMethods.form.search);
	};

	const handleReset = () => {
		resetPage();

		setQuery("");

		formMethods.update("search", "");
	};

	return {
		query,

		currentPage,

		form: formMethods.form,

		updateSearch: (value: string) => formMethods.update("search", value),

		handleSubmit,
		handleReset,
		handlePageChange: changePage,

		...moviesState
	};
}
