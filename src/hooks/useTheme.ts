import {useLayoutEffect} from "react"
import { useAppSelector } from "./useStoreHooks";

export function useTheme(){
    const theme = useAppSelector((state) => state.theme.value);
	useLayoutEffect(() => {
		const root = window.document.documentElement;

		if (theme === "auto") {
			root.removeAttribute("data-theme");
		} else {
			root.setAttribute("data-theme", theme);
		}
	}, [theme]);
 }