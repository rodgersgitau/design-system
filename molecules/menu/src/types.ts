import { PropsWithTheme } from "@evernest/theme";

export type MenuElement = HTMLDivElement;

export enum MenuDirection {
	vertical = "vertical",
	horizontal = "horizontal",
}

export interface StyledMenuProps extends PropsWithTheme<MenuElement> {
	/** Add types */
	direction?: MenuDirection;
}

export interface MenuProps extends MenuElement {
	/** Add types */
}
