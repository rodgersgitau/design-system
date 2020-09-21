import React from "react";
import { withWrapper } from "@evernest/dev-helpers";
import { withTests } from "@storybook/addon-jest";
import { Meta, Story } from "@storybook/react";
import { Footer } from "../src";
import results from "./footer.testresults.json";

const Template: Story = args => {
	return <Footer {...args} />;
};

export const Simple = Template.bind({});

Simple.args = {
	children: "I am a Footer",
};

const story: Meta = {
	component: Footer,
	title: "Design System/Organisms/Footer",
	decorators: [withTests({ results }), withWrapper()],
	parameters: {
		jest: ["footer"],
	},
	argTypes: {
		children: { control: "text" },
		theme: { control: false },
	},
};

export default story;
