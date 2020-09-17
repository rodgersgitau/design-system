import React from "react";
import { withWrapper } from "@evernest/dev-helpers";
import { withTests } from "@storybook/addon-jest";
import { Meta, Story } from "@storybook/react";
import { Typography, TypographyVariant } from "../src";
import results from "./typography.testresults.json";

const AllTemplate: Story = args => {
	return (
		<>
			<Typography {...args} variant={TypographyVariant.h1} />
			<Typography {...args} variant={TypographyVariant.h2} />
			<Typography {...args} variant={TypographyVariant.h3} />
			<Typography {...args} variant={TypographyVariant.body} />
		</>
	);
};

export const TypeScale = AllTemplate.bind({});

TypeScale.args = {
	children: "Typography",
};

const Template: Story = args => {
	return <Typography {...args} />;
};

export const Headline1 = Template.bind({});

Headline1.args = {
	children: "Headline 1",
	variant: TypographyVariant.h1,
};

export const Headline2 = Template.bind({});

Headline2.args = {
	children: "Headline 2",
	variant: TypographyVariant.h2,
};

export const Headline3 = Template.bind({});

Headline3.args = {
	children: "Headline 3",
	variant: TypographyVariant.h3,
};

const story: Meta = {
	component: Typography,
	title: "Design System/Atoms/Typography",
	decorators: [withTests({ results }), withWrapper()],
	parameters: {
		jest: ["typography"],
	},
	argTypes: {
		children: { control: "text" },
		variant: { control: "select" },
		theme: { control: false },
	},
};

export default story;
