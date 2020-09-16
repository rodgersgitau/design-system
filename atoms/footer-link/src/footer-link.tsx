import styled from "@emotion/styled";
import React from "react";
import { StyledFooterLinkProps, FooterLinkProps } from "./types";
import { css } from "@emotion/core";

export const StyledFooterLink = styled.a<StyledFooterLinkProps>`
	display: inline-flex;
	width: max-content;
	font-family: sans-serif;
	color: currentColor;
	text-decoration: none;
	font-size: 16px;
	font-weight: lighter;
	line-height: 28px;

	&:hover {
		${({ theme: { palette } }) => css`
			color: ${palette.blue.css};
		`};
	}
`;

export const FooterLink = React.forwardRef<FooterLinkProps, StyledFooterLinkProps>((props, ref) => (
	<StyledFooterLink {...props} ref={ref} />
));
