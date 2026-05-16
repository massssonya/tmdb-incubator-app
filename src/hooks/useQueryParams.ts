import { useSearchParams } from "react-router-dom";

type ParamValue = string | number | boolean | null | undefined;

type ParamsObject = Record<string, ParamValue>;

export function useQueryParams() {
	const [searchParams, setSearchParams] = useSearchParams();

	const getParam = (name: string) => {
		return searchParams.get(name) ?? "";
	};

	const setParam = (name: string, value: ParamValue) => {
		const params = new URLSearchParams(searchParams);

		if (value === undefined || value === null || value === "") {
			params.delete(name);
		} else {
			params.set(name, String(value));
		}

		setSearchParams(params);
	};

	const removeParam = (name: string) => {
		const params = new URLSearchParams(searchParams);
		params.delete(name);
		setSearchParams(params);
	};

	const setParams = (params: ParamsObject) => {
		const urlParams = new URLSearchParams(searchParams);

		Object.entries(params).forEach(([name, value]) => {
			if (value === undefined || value === null || value === "") {
				urlParams.delete(name);
			} else {
				urlParams.set(name, String(value));
			}
		});
		setSearchParams(urlParams);
	};

	const clearParams = () => {
		setSearchParams({});
	};

	return {
		searchParams,
		getParam,
		setParam,
		setParams,
		removeParam,
		clearParams
	};
}
