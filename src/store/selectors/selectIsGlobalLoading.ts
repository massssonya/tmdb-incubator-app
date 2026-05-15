import type { RootState } from "../store";

export const selectIsGlobalLoading = (
	state: RootState
) => {
	const queries =
		state.themoviedbApi.queries;

	return Object.values(queries).some(
		(query) =>
			query?.status ===
			"pending"
	);
};
