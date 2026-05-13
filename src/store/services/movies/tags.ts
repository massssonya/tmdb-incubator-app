import { createProvidesList } from "../../../lib/rtkQuery/createProvidesList";

export const moviesTags = {
	category: (
		category: string
	) =>
		createProvidesList(
			"Movie",
			category.toUpperCase()
		)
};
