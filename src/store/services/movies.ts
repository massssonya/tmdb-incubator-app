import { createProvidesList } from "../../lib/rtkQuery/createProvidesList";
import { api } from "./api";
import type { MovieCategoryType, MoviesResponse } from "./types";

export type GetMoviesByCategoryArgs = {
	category: MovieCategoryType;
	page?: number;
};

export const moviesApi = api.injectEndpoints({
	endpoints: (build) => ({
		getMoviesByCategory: build.query<MoviesResponse, GetMoviesByCategoryArgs>({
			query: ({ category, page = 1 }) => ({
				url: `3/movie/${category}`,
				params: { page }
			}),
			providesTags: (result, error, { category }) =>
				createProvidesList("Movie", category.toUpperCase())(result)
		})
	})
});

export const { useGetMoviesByCategoryQuery } = moviesApi;
