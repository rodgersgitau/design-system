import { PropsWithTheme } from "@evernest/theme";

export type EvernestLogoElement = HTMLDivElement;

export enum LogoSize {
	small = "small",
	large = "large",
	responsive = "responsive",
}

export interface StyledEvernestLogoProps extends PropsWithTheme<EvernestLogoElement> {
	/** Add types */
	size?: LogoSize;
}

export interface EvernestLogoProps extends EvernestLogoElement {
	/** Add types */
}
