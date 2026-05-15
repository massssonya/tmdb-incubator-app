import { LinearProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { selectIsGlobalLoading } from "../../store/selectors/selectIsGlobalLoading";

import styles from "./styles.module.css";

export function GlobalLoader() {
	const isLoading = useSelector(selectIsGlobalLoading);

	if (!isLoading) {
		return null;
	}

	return <LinearProgress className={styles.loader} />;
}
