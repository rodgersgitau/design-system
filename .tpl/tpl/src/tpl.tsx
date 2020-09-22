import styled from "@emotion/styled";
import React from "react";
import { StyledTplProps, TplElement } from "./types";

export const StyledTpl = styled.div<StyledTplProps>``;

export const Tpl = React.forwardRef<TplElement, StyledTplProps>((props, ref) => (
	<StyledTpl {...props} ref={ref} />
));
