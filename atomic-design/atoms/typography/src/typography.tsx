import styled from "@emotion/styled";
import React from "react";
import {
	RawStyledTypographyProps,
	StyledTypographyProps,
	TypographyElement,
	TypographyVariant,
} from "./types";

export const StyledHeadline1 = styled.h1<RawStyledTypographyProps>`
	font-family: var(--font-face-serif, serif);
	font-weight: normal;
	font-size: 55px;
	line-height: 63px;
`;
export const StyledHeadline2 = styled.h2<RawStyledTypographyProps>`
	font-family: var(--font-face-serif, serif);
	font-weight: normal;
	font-size: 36px;
	line-height: 45px;
`;
export const StyledHeadline3 = styled.h3<RawStyledTypographyProps>`
	font-family: var(--font-face-serif, serif);
	font-weight: normal;
	font-size: 24px;
	line-height: 36px;
	margin: 0 0 var(--spacing-xs);
`;

export const Body = styled.div<RawStyledTypographyProps>`
	font-family: var(--font-face-sans-serif, sans-serif);
	font-weight: lighter;
	font-size: 16px;
	line-height: 28px;
`;

const variants = {
	[TypographyVariant.h1]: StyledHeadline1,
	[TypographyVariant.h2]: StyledHeadline2,
	[TypographyVariant.h3]: StyledHeadline3,
	[TypographyVariant.body]: Body,
};

export const Typography = React.forwardRef<TypographyElement, StyledTypographyProps>(
	({ variant, component, ...props }, ref) => {
		const Variant = React.useMemo(() => (variant ? variants[variant] : Body), [variant]);
		const Component = React.useMemo(
			() => (component ? Variant.withComponent(component) : Variant),
			[Variant, component]
		);
		return <Component {...props} ref={ref} />;
	}
);
