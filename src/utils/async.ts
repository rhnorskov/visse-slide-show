export async function filter<T>(
	array: T[],
	predicate: (value: T, index: number, array: T[]) => unknown
) {
	const results = await Promise.all(array.map(predicate));

	return array.filter((_, index) => results[index]);
}
