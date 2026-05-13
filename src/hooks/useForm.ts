import { useState, useEffect, useCallback, useRef } from "react";

import { useDebounce } from "./useDebounce";

export function useForm<T extends object>(
	initialState: T,
	callback: (data: T) => void,
	delay: number = 300,
	autoSubmit: boolean = true
) {
	const [form, setForm] = useState<T>(initialState);

	const debouncedForm = useDebounce(form, delay);

	const callbackRef = useRef(callback);

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	const update = useCallback(<K extends keyof T>(name: K, value: T[K]) => {
		setForm((prev) => ({
			...prev,
			[name]: value
		}));
	}, []);

	const submit = useCallback(() => {
		callbackRef.current(form);
	}, [form]);

	useEffect(() => {
		if (autoSubmit) {
			callbackRef.current(debouncedForm);
		}
	}, [debouncedForm, autoSubmit]);

	return {
		form,

		update,

		reset: () => setForm(initialState),

		submit
	};
}
