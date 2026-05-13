import {
	useCallback,
	useState
} from "react";

export function useForm<T>(
	initialState: T
) {
	const [form, setForm] =
		useState(initialState);

	const update = useCallback(
		<K extends keyof T>(
			name: K,
			value: T[K]
		) => {
			setForm((prev) => ({
				...prev,
				[name]: value
			}));
		},
		[]
	);

	const reset = useCallback(() => {
		setForm(initialState);
	}, [initialState]);

	return {
		form,
		setForm,
		update,
		reset
	};
}
