import { useQueryParams } from "../../../hooks/useQueryParams";
import { MOVIE_CATEGORIES } from "../../../lib/constants/movieSections";


const DEFAULT_CATEGORY = MOVIE_CATEGORIES[0].category;
const INITIAL_PAGE = 1;

export function useMovieCategoryParams() {
	const {
		getParam,
		setParams
	} = useQueryParams();

	const category =
		getParam("category") || DEFAULT_CATEGORY;

	const page =
		Number(getParam("page")) || INITIAL_PAGE;

	const changeCategory = (value: string) => {
		setParams({
			category: value,
			page: INITIAL_PAGE
		});
	};

	const changePage = (page: number) => {
		setParams({
			category,
			page
		});
	};

	return {
		category,
		page,
		changeCategory,
		changePage
	};
}
