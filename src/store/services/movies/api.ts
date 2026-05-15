import { api } from "../api";
import { moviesTags } from "./tags";
import type {
	DiscoverMoviesArgs,
	GenreResponse,
	GetMoviesByCategoryArgs,
	MoviesResponse,
	SearchMoviesArgs
} from "./types";

export const moviesApi = api.injectEndpoints({
	endpoints: (build) => ({
		getMoviesByCategory: build.query<MoviesResponse, GetMoviesByCategoryArgs>({
			query: ({ category, page = 1 }) => ({
				url: `3/movie/${category}`,
				params: { page }
			}),
			providesTags: (result, error, { category }) =>
				moviesTags.category(category)(result)
		}),
		discoverMovies: build.query<MoviesResponse, DiscoverMoviesArgs>({
			query: ({
				sort_by = "",
				vote_average_gte = 0,
				vote_average_lte = 10,
				with_genres = "",
				page = 1
			}) => ({
				url: `3/discover/movie`,
				params: {
					...(sort_by && { sort_by }),

					...(vote_average_gte !== undefined && {
						"vote_average.gte": vote_average_gte
					}),

					...(vote_average_lte !== undefined && {
						"vote_average.lte": vote_average_lte
					}),

					...(with_genres && {
						with_genres
					}),

					page
				}
			}),
			serializeQueryArgs: ({ endpointName, queryArgs }) => {
				return {
					endpointName,

					sort_by: queryArgs.sort_by,

					vote_average_gte: queryArgs.vote_average_gte,

					vote_average_lte: queryArgs.vote_average_lte,

					with_genres: queryArgs.with_genres,

					page: queryArgs.page
				};
			}
		}),
		searchMovies: build.query<MoviesResponse, SearchMoviesArgs>({
			query: ({ query, page }) => ({
				url: `3/search/movie`,
				params: { query, ...(page && { page }) }
			})
		}),
		getGenres: build.query<GenreResponse, void>({
			query: () => ({
				url: `3/genre/movie/list`
			}),
			providesTags: ["Genres"],
			keepUnusedDataFor: 3600
		})
	})
});

export const {
	useGetMoviesByCategoryQuery,
	useDiscoverMoviesQuery,
	useSearchMoviesQuery,
	useGetGenresQuery
} = moviesApi;
