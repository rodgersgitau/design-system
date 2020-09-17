import {
	colorBlack,
	colorBlue,
	colorDarkGrey,
	colorGreen,
	colorGrey,
	colorRed,
	colorWhite,
	extractColor,
	getColor,
} from "@evernest/tokens";
import { Breakpoints, Colors, GridConfig, Mediaqueries, Palette, Spaces, Theme } from "./types";
import { tokens } from "./tokens";

const palette: Palette = {
	red: {
		token: extractColor(colorRed),
		css: getColor(colorRed),
	},
	green: {
		token: extractColor(colorGreen),
		css: getColor(colorGreen),
	},
	blue: {
		token: extractColor(colorBlue),
		css: getColor(colorBlue),
	},
	black: {
		token: extractColor(colorBlack),
		css: getColor(colorBlack),
	},
	white: {
		token: extractColor(colorWhite),
		css: getColor(colorWhite),
	},
	grey: {
		token: extractColor(colorGrey),
		css: getColor(colorGrey),
	},
	darkGrey: {
		token: extractColor(colorDarkGrey),
		css: getColor(colorDarkGrey),
	},
};

const colors: Colors = {
	primary: palette.black,
	secondary: palette.white,
	tertiary: palette.grey,
	lightText: palette.white,
	darkText: palette.black,
};

export const spaces: Spaces = {
	xxxs: 4,
	xxs: 16,
	xs: 24,
	s: 32,
	m: 40,
	l: 48,
	xl: 80,
	xxl: 120,
	xxxl: 184,
};

const gutter = {
	s: 8,
	m: 8,
	l: 12,
};
const gridPadding = {
	s: 16,
	m: 24,
	l: 24,
};
const padding = {
	s: 0,
	m: 0,
	l: 0,
};

export const breakpoints: Breakpoints = {
	s: 320,
	m: 768,
	l: 1128,
	xl: 1440,
};

export const mq: Mediaqueries = Object.entries(breakpoints).reduce(
	(previousValue, [key, value]: [keyof Breakpoints, number]) => ({
		...previousValue,
		[key]: `(min-width: ${value}px)`,
	}),
	{}
) as Mediaqueries;

export const grid: GridConfig = {
	gutter,
	gridPadding,
	padding,
	maxWidth: breakpoints.xl - gridPadding.l * 2,
	colSpan: {
		s: 4,
		m: 8,
		l: 12,
	},
};

export const layout = {
	header: {
		height: {
			s: 72,
			m: 72,
			l: 96,
		},
	},
};

export const theme: Theme = {
	layout,
	palette,
	colors,
	spaces,
	breakpoints,
	mq,
	grid,
	tokens,
};
