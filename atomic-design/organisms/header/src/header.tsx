import styled from "@emotion/styled";
import React from "react";
import { StyledHeaderProps, HeaderProps } from "./types";
import { css } from "@emotion/core";

export const StyledHeader = styled.div<StyledHeaderProps>`
	height: var(--header-height, inherit);
	display: flex;
	flex-direction: column;
	justify-content: center;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;
	${({ theme: { palette }, fixed, plain, sticky }) => css`
		position: ${fixed ? "fixed" : sticky ? "sticky" : "absolute"};
		background: ${plain ? "inherit" : palette.darkGrey.css};
		color: ${plain ? "currentColor" : palette.white.css};
	`};
`;

export const Header = React.forwardRef<HeaderProps, StyledHeaderProps>((props, ref) => (
	<StyledHeader {...props} ref={ref} />
));
