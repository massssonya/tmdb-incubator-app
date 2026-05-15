import { useState } from "react";

const INITIAL_PAGE = 1;

export function useSearchPagination() {
	const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);

	const resetPage = () => {
		setCurrentPage(INITIAL_PAGE);
	};

	const changePage = (page: number) => {
		setCurrentPage(page);

		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	return {
		currentPage,
		changePage,
		resetPage
	};
}
