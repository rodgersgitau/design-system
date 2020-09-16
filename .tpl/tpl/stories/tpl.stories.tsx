import React from "react";
import { withWrapper } from "@evernest/dev-helpers";
import { withTests } from "@storybook/addon-jest";
import { Meta, Story } from "@storybook/react";
import { Tpl } from "../src";
import results from "./tpl.testresults.json";

const Template: Story = args => {
	return <Tpl {...args} />;
};

export const Simple = Template.bind({});

Simple.args = {
	children: "I am a Tpl",
};

const story: Meta = {
	component: Tpl,
	title: "Design System/{type}/{tpl}",
	decorators: [withTests({ results }), withWrapper()],
	parameters: {
		jest: ["tpl"],
	},
	argTypes: {
		children: { control: "text" },
		theme: { control: false },
	},
};

export default story;
