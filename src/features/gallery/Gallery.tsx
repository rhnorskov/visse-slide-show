import { AnimatePresence } from "framer-motion";
import { useInterval } from "hooks/useInterval";
import React, { useState } from "react";
import { FullScreenHandle } from "react-full-screen";

import * as S from "./Gallery.styles";

export interface GalleryProps {
	images: string[];
	interval: number;
	fullscreen: FullScreenHandle;
}

export function Gallery({ images, interval, fullscreen }: GalleryProps) {
	const [index, setIndex] = useState(0);

	useInterval(
		() => {
			setIndex(index => (index < images.length - 1 ? index + 1 : 0));
		},
		images.length ? interval : null
	);

	return (
		<S.Container handle={fullscreen}>
			{images.length && (
				<AnimatePresence>
					<S.Image
						key={index}
						path={images[index]}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					/>
				</AnimatePresence>
			)}
		</S.Container>
	);
}
