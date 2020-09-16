import styled from "@emotion/styled";
import React from "react";
import { StyledHeaderLinkProps, HeaderLinkProps } from "./types";

const StyledHighlight = styled.div`
	pointer-events: none;
	position: absolute;
	top: 50%;
	left: 50%;
	height: var(--spacing-s);
	width: 100%;
	transform: translate(-50%, -50%);
	background-color: rgba(255, 255, 255, 0);
	transition: background-color 0.3s ease-in-out;
	will-change: background-color;
`;

const StyledHeaderLink = styled.a<StyledHeaderLinkProps>`
	position: relative;
	display: inline-flex;
	font-family: sans-serif;
	color: currentColor;
	text-decoration: none;
	padding: var(--spacing-s) 10px;
	margin-left: 16px;
	font-size: 14px;
	font-weight: lighter;
	line-height: 28px;
	border-radius: 2px;

	&:hover {
		${StyledHighlight} {
			background-color: rgba(255, 255, 255, 0.1);
		}
	}
`;

export const HeaderLink = React.forwardRef<HeaderLinkProps, StyledHeaderLinkProps>(
	({ children, ...props }, ref) => (
		<StyledHeaderLink {...props} ref={ref}>
			<StyledHighlight />
			{children}
		</StyledHeaderLink>
	)
);
