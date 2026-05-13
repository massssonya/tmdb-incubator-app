import type { Movie } from "./movies/types";

export type MovieCardType = Pick<
	Movie,
	"id" | "poster_path" | "title" | "vote_average"
>;
