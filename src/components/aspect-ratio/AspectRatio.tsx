import React, { ReactNode } from "react";
import * as S from "./AspectRatio.styles";

export interface AspectRatioProps {
	ratio: [number, number];
	children?: ReactNode;
}

export function AspectRatio({ ratio, children }: AspectRatioProps) {
	return (
		<S.Outer style={{ paddingTop: (ratio[1] / ratio[0]) * 100 + "%" }}>
			<S.Inner>{children}</S.Inner>
		</S.Outer>
	);
}
