import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import { Layout } from "../components/LayoutPage";

export const router = createBrowserRouter([
	{
		path: ROUTES.MAIN,
		element: <Layout />,
		errorElement: <h1>404</h1>,
		children: [
			{
				path: ROUTES.MAIN,
				lazy: async () => {
					const { MainPage } = await import("../pages/MainPage");
					return { Component: MainPage };
				}
			},
			{
				path: ROUTES.CATEGORIES,
				lazy: async () => {
					const { CategoryMoviesPage } =
						await import("../pages/CategoryMoviesPage");
					return { Component: CategoryMoviesPage };
				}
			},
			{
				path: ROUTES.FILTERED,
				lazy: async () => {
					const { FilteredMoviesPage } =
						await import("../pages/FilteredMoviesPage");
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
			}
		]
	}
]);
