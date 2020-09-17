import { withTests } from "@storybook/addon-jest";
import React from "react";
import { Icon, IconProps } from "../src";
import results from "./icon.testresults.json";
import { Story } from "@storybook/react";
import { withWrapper } from "@evernest/dev-helpers";

const Template: Story<IconProps> = args => {
	return <Icon {...args} />;
};

export const Simple = Template.bind({});

Simple.args = {
	icon: "instagram",
};

const story = {
	component: Icon,
	title: "Design System/Atoms/Icon",
	decorators: [withTests({ results }), withWrapper()],
	parameters: {
		jest: ["icon"],
	},
};

export default story;
