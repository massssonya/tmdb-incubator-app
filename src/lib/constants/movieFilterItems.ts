export const MOVIE_FILTER_ITEMS = [
	{
		label: "Popularity ↓",
		value: "popularity.desc"
	},
	{
		label: "Popularity ↑",
		value: "popularity.asc"
	},
	{
		label: "Rating ↓",
		value: "vote_average.desc"
	},
	{
		label: "Rating ↑",
		value: "vote_average.asc"
	},
	{
		label: "Release Date ↓",
		value: "primary_release_date.desc"
	},
	{
		label: "Release Date ↑",
		value: "primary_release_date.asc"
	},
	{
		label: "Title A-Z",
		value: "title.asc"
	},
	{
		label: "Title Z-A",
		value: "title.desc"
	}
] as const;
