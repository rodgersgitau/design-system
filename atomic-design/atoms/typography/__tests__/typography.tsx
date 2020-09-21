import React from "react";
import { mount } from "enzyme";
import { Typography, TypographyVariant } from "../src";
import { Wrapper } from "@evernest/dev-helpers";

test("Typography renders children", () => {
	const text = "Hello World!";
	const wrapper = mount(
		<Wrapper>
			<Typography variant={TypographyVariant.body}>{text}</Typography>
		</Wrapper>
	);
	expect(wrapper.find(Typography).text()).toEqual(text);
});

test("Typography allows setting classname", () => {
	const className = "test";
	const wrapper = mount(
		<Wrapper>
			<Typography variant={TypographyVariant.body} className={className} />
		</Wrapper>
	);
	expect(wrapper.find(Typography)).toHaveClassName(className);
});
