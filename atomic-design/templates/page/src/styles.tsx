import { css, Global } from "@emotion/core";
import React from "react";
import { normalize } from "@evernest/normalize-css";

export const cssNormalize = css`
	${normalize};
`;

export const globalStyles = css`
	html {
		font-family: var(--font-face-sans-serif), sans-serif;
	}
	body {
		margin: 0;
		min-height: 100vh;
	}
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	a {
		color: currentColor;
	}
`;

export const fontFaces = css`
	:root {
		--font-face-sans-serif: object_sans;
		--font-face-serif: made_mirage;
	}
	@font-face {
		font-family: "made_mirage";
		src: url("/fonts/web/made_mirage_medium-webfont.woff2") format("woff2"),
			url("/fonts/web/made_mirage_medium-webfont.woff") format("woff");
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
		font-family: "object_sans";
		src: url("/fonts/web/ObjectSans-Regular.woff2") format("woff2"),
			url("/fonts/web/ObjectSans-Regular.woff") format("woff");
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
		font-family: "object_sans";
		src: url("/fonts/web/ObjectSans-Bold.woff2") format("woff2"),
			url("/fonts/web/ObjectSans-Bold.woff") format("woff");
		font-weight: 700;
		font-style: normal;
	}
	@font-face {
		font-family: "object_sans";
		src: url("/fonts/web/ObjectSans-Thin.woff2") format("woff2"),
			url("/fonts/web/ObjectSans-Thin.woff") format("woff");
		font-weight: 100;
		font-style: normal;
	}
`;

export const Normalize = () => <Global styles={cssNormalize} />;

export const GlobalStyles = () => <Global styles={globalStyles} />;

export const FontFaces = () => <Global styles={fontFaces} />;
