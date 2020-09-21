import { COLCOUNT, COLSPAN } from "./constants";
import styled from "@emotion/styled";

export const Stage = styled.div`
	${COLCOUNT}: var(${COLSPAN});
	display: flex;
	width: 100vw;
	margin-left: calc((-100vw + 100%) / 2);
	margin-right: calc((-100vw + 100%) / 2);
`;
