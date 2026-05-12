import { SectionLayout } from "../../components/SectionLayout";
import HeroSection from "./section/HeroSection";
import { MovieSection } from "./section/MovieSection";


export function MainPage() {


	return (
		<SectionLayout withPadding={false}>
			<HeroSection />
			<MovieSection />
		</SectionLayout>
	);
}
