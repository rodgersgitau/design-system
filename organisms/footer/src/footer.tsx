import { css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import { StyledFooterProps, FooterProps } from "./types";

export const StyledFooter = styled.div<StyledFooterProps>`
	height: 300px;
	${({ theme: { palette } }) => css`
		background: #232324;
		color: ${palette.white.css};
	`};
`;

export const Footer = React.forwardRef<FooterProps, StyledFooterProps>((props, ref) => (
	<StyledFooter {...props} ref={ref} />
));
