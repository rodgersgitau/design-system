import { IconCollection } from "@evernest/icons";
import React from "react";

export enum Size {
	medium = 24,
}

export type IconName = keyof IconCollection;

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
	icon: IconName;
	size?: Size;
}
