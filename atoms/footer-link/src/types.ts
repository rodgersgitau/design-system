import { PropsWithTheme } from "@evernest/theme";
import React from "react";

export type FooterLinkElement = HTMLAnchorElement;

export interface StyledFooterLinkProps
	extends PropsWithTheme<FooterLinkElement>,
		React.AnchorHTMLAttributes<FooterLinkElement> {
	/** Add types */
}

export interface FooterLinkProps extends FooterLinkElement {
	/** Add types */
}
