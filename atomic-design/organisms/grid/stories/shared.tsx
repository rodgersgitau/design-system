import React from "react";
import { ColorBox, randomColor } from "@evernest/dev-helpers";

export const CustomColorBox: React.FC = props => {
	const background = React.useMemo(() => randomColor(), []);
	return <ColorBox {...props} background={background} margin="1em" height="10em" />;
};
