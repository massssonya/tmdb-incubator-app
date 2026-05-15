import { useForm } from "../../../hooks/useForm";

interface FormState {
	search: string;
}

export function useSearchForm(initialValue: string) {
	return useForm<FormState>({
		search: initialValue
	});
}
