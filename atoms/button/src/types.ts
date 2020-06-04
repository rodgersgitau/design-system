import { IconCollection } from "@evernest/icons";
import React from "react";

export enum Size {
	small = "small",
	medium = "medium",
	large = "large",
}

export type IconName = keyof IconCollection;

export interface ButtonProps
	extends Pick<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		"className" | "disabled" | "name" | "type"
	> {
	size?: Size;
}
