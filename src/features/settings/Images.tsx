import { AspectRatio } from "components/aspect-ratio";
import { useStickyState } from "hooks/useStickyState";
import { chain } from "lodash";
import React, { ChangeEvent, MouseEvent, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { filter } from "utils/async";
import { exists } from "utils/fs";

import * as S from "./Images.styles";

export interface ImagesProps {
	images: string[];
	onImagesChange: (images: string[]) => void;
}

export function Images({ images, onImagesChange }: ImagesProps) {
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop: acceptedFiles => {
			onImagesChange(
				chain(images)
					.union(acceptedFiles.map(file => file.path))
					.uniq()
					.value()
			);
		},
	});

	const validateImages = async () => {
		onImagesChange(await filter(images, exists));
	};

	const handleRemoveClick = (
		image: string,
		event: MouseEvent<HTMLImageElement>
	) => {
		event.stopPropagation();
		onImagesChange(images.filter(img => img !== image));
	};

	useEffect(() => void validateImages(), [images.length]);

	return (
		<S.Container {...getRootProps()}>
			<input multiple accept="image/*" {...getInputProps()} />

			<S.Previews>
				{images.map(image => (
					<AspectRatio key={image} ratio={[4, 3]}>
						<S.Preview
							path={image}
							onClick={event => handleRemoveClick(image, event)}
						/>
					</AspectRatio>
				))}
			</S.Previews>

			{isDragActive ? (
				<p>Slip billederne her...</p>
			) : (
				<p>
					Træk og slip nogle billeder her, eller klik for at vælge nogle
					billeder
				</p>
			)}
		</S.Container>
	);
}
