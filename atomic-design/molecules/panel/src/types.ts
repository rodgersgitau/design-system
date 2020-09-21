import { PropsWithTheme } from "@evernest/theme";

export type PanelElement = HTMLDivElement;
export type ToggleElement = HTMLButtonElement;

export enum Anchor {
	bottom = "bottom",
	left = "left",
	right = "right",
	top = "top",
}

export interface StyledPanelProps extends PropsWithTheme<PanelElement> {
	/** Add types */
	anchor: Anchor;
	onClose?(): void;
	open?: boolean;
	width?: string;
}

export interface StyledBackdropProps extends PropsWithTheme {
	/** Add types */
	open?: boolean;
}

export interface PanelProps extends PanelElement {
	/** Add types */
}

export interface StyledToggleProps extends PropsWithTheme<ToggleElement> {
	/** Add types */
	open?: boolean;
}

export interface ToggleProps extends ToggleElement {
	/** Add types */
}
