import React from "react";
import { css, Global } from "@emotion/core";
import styled from "@emotion/styled";

export const globalStyle = css`
	body {
		margin: 0;
	}
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
`;

export const StyledWrapper = styled.div`
	padding: 1rem;
`;

export const Wrapper: React.FC = ({ children }) => (
	<StyledWrapper>
		<Global styles={globalStyle} />
		{children}
	</StyledWrapper>
);
