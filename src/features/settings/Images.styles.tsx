import { Image } from "components/image";
import styled from "styled-components";

export const Container = styled.div`
	outline: 0;
	padding: 1.5rem 0;
	border-top: 2px solid #000;
`;

export const Previews = styled.div`
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	overflow-y: auto;
`;

export const Preview = styled(Image)`
	width: 100%;
	height: 100%;
	display: block;
	object-fit: contain;
	background-color: #000;
	border-radius: 0.25rem;
`;
