import styled from "styled-components";
import { FullScreen } from "react-full-screen";
import { Image as ImageUnstyled } from "components/image";

export const Container = styled(FullScreen)`
	overflow: hidden;
	background-color: #000;
`;

export const Image = styled(ImageUnstyled)`
	width: 100%;
	height: 100%;
	object-fit: contain;
	display: block;
`;
