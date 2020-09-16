import { PropsWithTheme } from "@evernest/theme";

export type HeaderElement = HTMLDivElement;

export interface CommonHeaderProps {
	fixed?: boolean;
}

export interface StyledHeaderProps extends PropsWithTheme<HeaderElement>, CommonHeaderProps {
	/** Add types */
}

export interface HeaderProps extends HeaderElement, CommonHeaderProps {
	/** Add types */
}
