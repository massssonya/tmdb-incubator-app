import { useSearchParams } from "react-router-dom";

export function useSearchQueryParams() {
	const [searchParams, setSearchParams] = useSearchParams();

	const query = searchParams.get("query") ?? "";

	const setQuery = (value: string) => {
		if (!value) {
			setSearchParams({});
			return;
		}

		setSearchParams({
			query: value
		});
	};

	return {
		query,
		setQuery
	};
}
