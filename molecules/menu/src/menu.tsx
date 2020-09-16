import { css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import { StyledMenuProps, MenuProps, MenuDirection } from "./types";

export const StyledMenuTpl = styled.nav<StyledMenuProps>`
	display: none;
	${({ theme: { mq }, direction }) => css`
		flex-direction: ${direction === MenuDirection.vertical ? "column" : "row"};
		@media ${mq.l} {
			display: flex;
		}
	`};
`;

export const Menu = React.forwardRef<MenuProps, StyledMenuProps>((props, ref) => (
	<StyledMenuTpl {...props} ref={ref} />
));
