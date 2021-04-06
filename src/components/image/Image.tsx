import React, {
	createElement,
	HTMLProps,
	ReactNode,
	ComponentProps,
	useEffect,
	useState,
} from "react";
import fs from "fs";
import mime from "mime-types";
import { motion } from "framer-motion";

export interface ImageProps
	extends Omit<ComponentProps<typeof motion.img>, "src"> {
	path: string;
}

export function Image({ path, ...props }: ImageProps) {
	const [src, setSrc] = useState("");

	useEffect(() => {
		fs.readFile(path, (err, file) => {
			if (err) return;
			setSrc(`data:${mime.lookup(path)};base64,${file.toString("base64")}`);
		});
	});

	return <motion.img {...(props as any)} src={src} />;
}
