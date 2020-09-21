import { css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import { StyledFooterProps, FooterProps } from "./types";

export const StyledFooter = styled.div<StyledFooterProps>`
	padding: var(--spacing-xl) 0;
	${({ theme: { palette } }) => css`
		background: ${palette.darkGrey.css};
		color: ${palette.white.css};
	`};
`;

export const Footer = React.forwardRef<FooterProps, StyledFooterProps>((props, ref) => (
	<StyledFooter {...props} ref={ref} />
));
