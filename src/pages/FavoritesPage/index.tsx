import { FavoritesMovies } from "../../components/FavoritesMovies";
import { SectionLayout } from "../../components/SectionLayout";

export function FavoritesPage() {
	return (
		<SectionLayout>
			<h1>Favorites</h1>
			<FavoritesMovies />
		</SectionLayout>
	);
}
