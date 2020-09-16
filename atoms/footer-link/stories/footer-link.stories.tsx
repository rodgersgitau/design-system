import React from "react";
import { withWrapper } from "@evernest/dev-helpers";
import { withTests } from "@storybook/addon-jest";
import { Meta, Story } from "@storybook/react";
import { FooterLink } from "../src";
import results from "./footer-link.testresults.json";

const Template: Story = args => {
	return <FooterLink {...args} />;
};

export const Simple = Template.bind({});

Simple.args = {
	children: "I am a FooterLink",
};

const story: Meta = {
	component: FooterLink,
	title: "Design System/Atoms/Footer link",
	decorators: [withTests({ results }), withWrapper()],
	parameters: {
		jest: ["footer-link"],
	},
	argTypes: {
		children: { control: "text" },
		theme: { control: false },
	},
};

export default story;
