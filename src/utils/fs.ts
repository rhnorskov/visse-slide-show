import fs from "fs";

export async function exists(path: string) {
	return new Promise<boolean>(resolve => {
		fs.access(path, error => {
			resolve(!error);
		});
	});
}
