import { IconCollection } from "@evernest/icons";
import React from "react";

export enum Size {
	medium = 24,
	large = 48,
}

export type IconName = keyof IconCollection;

export interface IconProps extends Pick<React.SVGAttributes<SVGSVGElement>, "className"> {
	icon: IconName;
	size?: Size;
}
