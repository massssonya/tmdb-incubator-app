import { api } from "../api";
import { moviesTags } from "./tags";
import type {
	DiscoverMoviesArgs,
	GenreResponse,
	GetMoviesByCategoryArgs,
	MoviesResponse
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
				with_genres
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
					})
				}
			})
		}),
		getGenres: build.query<GenreResponse, void>({
			query: () => ({
				url: `3/genre/movie/list`
			}),
			providesTags: ["Genres"]
		})
	})
});

export const {
	useGetMoviesByCategoryQuery,
	useDiscoverMoviesQuery,
	useGetGenresQuery
} = moviesApi;
