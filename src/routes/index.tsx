import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import { Layout } from "../components/LayoutPage";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
	{
		path: ROUTES.MAIN,
		element: <Layout />,
		children: [
			{
				index: true,
				lazy: async () => {
					const { MainPage } = await import("../pages/MainPage");
					return { Component: MainPage };
				}
			},
			{
				path: ROUTES.CATEGORIES,
				lazy: async () => {
					const { CategoryMoviesPage } = await import("../pages/CategoryPage");
					return { Component: CategoryMoviesPage };
				}
			},
			{
				path: ROUTES.FILTERED,
				lazy: async () => {
					const { FilteredMoviesPage } = await import("../pages/FilteredPage");
					return { Component: FilteredMoviesPage };
				}
			},
			{
				path: ROUTES.SEARCH,
				lazy: async () => {
					const { SearchPage } = await import("../pages/SearchPage");
					return { Component: SearchPage };
				}
			},
			{
				path: ROUTES.FAVORITES,
				lazy: async () => {
					const { FavoritesPage } = await import("../pages/FavoritesPage");
					return { Component: FavoritesPage };
				}
			},
			{
				path: "*",
				element: <NotFoundPage />
			}
		]
	}
]);
