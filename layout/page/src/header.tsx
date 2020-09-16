import styled from "@emotion/styled";
import { PropsWithTheme } from "@evernest/theme";

export const Header = styled.header<PropsWithTheme>`
	grid-area: Header;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;
	height: var(--header-height);
`;
