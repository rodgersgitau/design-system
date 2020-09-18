import styled from "@emotion/styled";
import { css } from "@emotion/core";
import React from "react";
import { Anchor, PanelProps, StyledBackdropProps, StyledPanelProps } from "./types";

export const StyledBackdrop = styled.div<StyledBackdropProps>`
	position: fixed;
	z-index: 100;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	opacity: 0;
	visibility: hidden;
	pointer-events: none;
	transition-property: opacity, visibility;
	${({ theme: { palette } }) =>
		css`
			background: ${palette.black.css};
		`};
	${({ open }) =>
		open &&
		css`
			visibility: visible;
			pointer-events: all;
			opacity: 0.7;
		`};
`;

export const StyledPanel = styled.aside<StyledPanelProps>`
	position: fixed;
	z-index: 100;
	transition-property: transform;
	${({ theme: { palette } }) => css`
		background: ${palette.white.css};
	`};
	${({ anchor, width, open }) => {
		switch (anchor) {
			case Anchor.bottom: {
				return css`
					bottom: 0;
					left: 0;
					right: 0;
					transform: translate3d(0, ${open ? 0 : "100%"}, 0);
				`;
			}
			case Anchor.left: {
				return css`
					bottom: 0;
					left: 0;
					top: 0;
					width: ${width};
					max-width: calc(100vw - 80px);
					transform: translate3d(${open ? 0 : "-100%"}, 0, 0);
				`;
			}
			case Anchor.right: {
				return css`
					bottom: 0;
					top: 0;
					right: 0;
					width: ${width};
					max-width: calc(100vw - 80px);
					transform: translate3d(${open ? 0 : "100%"}, 0, 0);
				`;
			}
			case Anchor.top: {
				return css`
					top: 0;
					left: 0;
					right: 0;
					transform: translate3d(0, ${open ? 0 : "-100%"}, 0);
				`;
			}
			default: {
				break;
			}
		}
	}};
`;

export const Panel = React.forwardRef<PanelProps, StyledPanelProps>(
	({ open, onClose, ...props }, ref) => {
		const handleClick = React.useCallback(() => {
			open && onClose();
		}, [open, onClose]);
		return (
			<>
				<StyledBackdrop open={open} onClick={handleClick} />
				<StyledPanel {...props} open={open} ref={ref} />
			</>
		);
	}
);

Panel.defaultProps = {
	width: "295px",
};
