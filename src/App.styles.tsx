import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		background-color: #fff;
		font-family: sans--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
	}
`;

export const Container = styled.div`
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr 3fr;
`;
