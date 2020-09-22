import { PropsWithTheme } from "@evernest/theme";

export type TypographyElement = HTMLDivElement;

export enum TypographyVariant {
	h1 = "h1",
	h2 = "h2",
	h3 = "h3",
	body = "body",
}

export interface RawStyledTypographyProps extends PropsWithTheme<TypographyElement> {
	/** Add types */
}

export interface StyledTypographyProps extends RawStyledTypographyProps {
	/** Add types */
	/** @default TypographyVariant.body */
	variant?: TypographyVariant;
	component?: keyof JSX.IntrinsicElements;
}
