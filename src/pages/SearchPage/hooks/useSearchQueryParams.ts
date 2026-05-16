import { useQueryParams } from "../../../hooks/useQueryParams";

export function useSearchQueryParams() {
	const { getParam, setParam } = useQueryParams();

	const query = getParam("query");

	const setQuery = (value: string) => {
		setParam("query", value);
	};
	return {
		query,
		setQuery
	};
}
