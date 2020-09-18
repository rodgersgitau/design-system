import { css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import { StyledMenuProps, MenuProps, MenuDirection } from "./types";

export const StyledMenuTpl = styled.nav<StyledMenuProps>`
	${({ direction }) => css`
		flex-direction: ${direction === MenuDirection.vertical ? "column" : "row"};
	`};
`;

export const Menu = React.forwardRef<MenuProps, StyledMenuProps>((props, ref) => (
	<StyledMenuTpl {...props} ref={ref} />
));
