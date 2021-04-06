import { useStickyState } from "hooks/useStickyState";
import React, { ChangeEvent } from "react";
import { FullScreenHandle } from "react-full-screen";

import { Images } from "./Images";
import * as S from "./Settings.styles";

export interface SettingsProps {
	images: string[];
	interval: string;
	fullscreen: FullScreenHandle;
	onImagesChange: (images: string[]) => void;
	onIntervalChange: (interval: string) => void;
}

export function Settings({
	images,
	interval,
	fullscreen,
	onImagesChange,
	onIntervalChange,
}: SettingsProps) {
	const handleImagesChange = (images: string[]) => {
		onImagesChange(images);
	};

	const handleIntervalChange = (event: ChangeEvent<HTMLInputElement>) => {
		onIntervalChange(event.currentTarget.value);
	};

	return (
		<S.Container>
			<div>
				<label>
					<span>Tidsinterval (ms):</span>
					<input
						type="number"
						value={interval}
						onChange={handleIntervalChange}
					/>
				</label>
			</div>
			<Images images={images} onImagesChange={handleImagesChange} />
			<div>
				<S.Button onClick={fullscreen.enter}>Start</S.Button>
			</div>
		</S.Container>
	);
}
