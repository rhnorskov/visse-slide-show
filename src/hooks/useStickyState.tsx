import { useEffect, useState } from "react";

export function useStickyState<T>(initialValue: T, key: string) {
	const [value, setValue] = useState<T>(() => {
		const stickyValue = window.localStorage.getItem(key);

		return stickyValue !== null ? JSON.parse(stickyValue) : initialValue;
	});

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue] as const;
}
