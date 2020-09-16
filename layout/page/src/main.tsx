import styled from "@emotion/styled";
import { PropsWithTheme } from "@evernest/theme";

export const Main = styled.main<PropsWithTheme>`
	grid-area: Main;
	margin-top: var(--header-height);
	min-height: calc(100vh - var(--header-height));
`;
