import React from "react";
import { withWrapper } from "@evernest/dev-helpers";
import { withTests } from "@storybook/addon-jest";
import { Meta, Story } from "@storybook/react";
import { Header } from "../src";
import results from "./header.testresults.json";

const Template: Story = args => {
	return <Header {...args} />;
};

export const Simple = Template.bind({});

Simple.args = {
	children: "I am a Header",
};

const story: Meta = {
	component: Header,
	title: "Design System/Organisms/Header",
	decorators: [withTests({ results }), withWrapper()],
	parameters: {
		jest: ["header"],
	},
	argTypes: {
		children: { control: "text" },
		theme: { control: false },
	},
};

export default story;
