import { PropsWithTheme } from "@evernest/theme";

export type HeaderElement = HTMLDivElement;

export interface StyledHeaderProps extends PropsWithTheme<HeaderElement> {
	/** Add types */
	plain?: boolean;
	fixed?: boolean;
	sticky?: boolean;
}
