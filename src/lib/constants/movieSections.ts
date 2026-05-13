import type { MovieCategoryType } from "../../store/services/types";

export const MOVIE_CATEGORIES: { title: string; category: MovieCategoryType }[] = [
	{ title: "Popular Movies", category: "popular" },
	{ title: "Top Rated Movies", category: "top_rated" },
	{ title: "Upcoming Movies", category: "upcoming" },
	{ title: "Now Playing", category: "now_playing" }
];
