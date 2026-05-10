import { api } from "./api";

export interface Movie {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

interface PopularMoviesResponse {
	page: number;
	results: Movie[];
	total_pages: number;
	total_results: number;
}

export const popularMoviesApi = api.injectEndpoints({
	endpoints: (build) => ({
		getPopularMovies: build.query<PopularMoviesResponse, void>({
			query: () => ({ url: "3/movie/popular" }),
			providesTags: (result) =>
				result
					? [
							...result.results.map(({ id }) => ({
								type: "PopularMovie" as const,
								id
							})),

							{
								type: "PopularMovie" as const,
								id: "LIST"
							}
						]
					: [
							{
								type: "PopularMovie" as const,
								id: "LIST"
							}
						],

		}),
	})
});

export const { useGetPopularMoviesQuery } = popularMoviesApi;

export const {
	endpoints: { getPopularMovies }
} = popularMoviesApi;
