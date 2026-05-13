export interface Genre {
	id: number;
	name: string;
}

export interface GenreResponse {
	genres: Genre[];
}
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

export type MovieCategoryType =
	| "popular"
	| "top_rated"
	| "upcoming"
	| "now_playing";

export interface MoviesResponse {
	page: number;
	results: Movie[];
	total_pages: number;
	total_results: number;
}

export type GetMoviesByCategoryArgs = {
	category: MovieCategoryType;
	page?: number;
};

export type SortByType =
	| "popularity.asc"
	| "popularity.desc"
	| "vote_average.asc"
	| "vote_average.desc"
	| "primary_release_date.desc"
	| "primary_release_date.asc"
	| "title.asc"
	| "title.desc";

export type DiscoverMoviesArgs = {
	page?: number;
	sort_by?: SortByType;
	vote_average_gte?: number;
	vote_average_lte?: number;
	with_genres?: string;
};
