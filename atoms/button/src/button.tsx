import styled from "@emotion/styled";
import React from "react";
import { ButtonProps, Size } from "./types";

const StyledButton = styled("button", {
	shouldForwardProp: prop => prop !== "size",
})<Pick<ButtonProps, "size">>`
	padding: 1.25em 1.5em;
	font-size: 1em;
	line-height: 1;
	border: 0;
	border-radius: 10px;
	background: #fff;
	color: #000;
	cursor: pointer;
	box-shadow: 0 16px 18px rgba(0, 0, 0, 0.13);

	&:hover {
		background: #eee;
	}

	&:active {
		background: #ddd;
	}

	&:focus {
		outline: 0;
		box-shadow: 0 0 0 2px highlight, 0 16px 18px rgba(0, 0, 0, 0.13);
	}
`;

const Button: React.FC<ButtonProps> = ({ className, children, size, type }) => {
	return (
		<StyledButton size={size} className={className} type={type}>
			{children}
		</StyledButton>
	);
};

Button.defaultProps = {
	size: Size.medium,
	type: "button",
};

export { Button };
