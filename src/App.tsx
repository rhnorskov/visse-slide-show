import React from "react";

import { Settings } from "./features/settings";
import { Gallery } from "./features/gallery";
import { useFullScreenHandle } from "react-full-screen";

import * as S from "./App.styles";
import Split from "react-split";
import { useStickyState } from "hooks/useStickyState";

export interface AppProps {}

export function App(props: AppProps) {
	const [images, setImages] = useStickyState<string[]>([], "images");
	const [interval, setInterval] = useStickyState<string>("10000", "interval");
	const fullscreen = useFullScreenHandle();

	return (
		<>
			<S.GlobalStyle />
			<S.Container>
				<Settings
					images={images}
					interval={interval}
					fullscreen={fullscreen}
					onImagesChange={setImages}
					onIntervalChange={setInterval}
				/>
				<Gallery
					images={images}
					interval={Number(interval)}
					fullscreen={fullscreen}
				/>
			</S.Container>
		</>
	);
}
