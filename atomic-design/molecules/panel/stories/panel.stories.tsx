import React from "react";
import { withWrapper } from "@evernest/dev-helpers";
import { withTests } from "@storybook/addon-jest";
import { Meta, Story } from "@storybook/react";
import { Anchor, Panel, StyledPanelProps, Toggle } from "../src";
import results from "./panel.testresults.json";

const Template: Story<StyledPanelProps> = args => {
	const [open, setOpen] = React.useState(false);
	return (
		<>
			<Toggle
				open={open}
				onClick={() => {
					setOpen(state => !state);
				}}
			/>
			<Panel
				{...args}
				open={open}
				onClose={() => {
					setOpen(state => !state);
				}}
			/>
		</>
	);
};

export const Simple = Template.bind({});

Simple.args = {
	children: "I am a Panel",
	anchor: Anchor.left,
};

const story: Meta = {
	component: Panel,
	title: "Design System/Molecules/Panel",
	decorators: [withTests({ results }), withWrapper()],
	parameters: {
		jest: ["panel"],
		docs: {
			inlineStories: false,
			iframeHeight: 500,
		},
	},
	argTypes: {
		children: { control: "text" },
		theme: { control: false },
	},
};

export default story;