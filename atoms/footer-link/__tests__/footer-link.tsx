import React from "react";
import { mount } from "enzyme";
import { FooterLink } from "../src";
import { Wrapper } from "@evernest/dev-helpers";

test("FooterLink renders children", () => {
	const text = "Hello World!";
	const wrapper = mount(
		<Wrapper>
			<FooterLink>{text}</FooterLink>
		</Wrapper>
	);
	expect(wrapper.find(FooterLink).text()).toEqual(text);
});

test("FooterLink allows setting classname", () => {
	const className = "test";
	const wrapper = mount(
		<Wrapper>
			<FooterLink className={className} />
		</Wrapper>
	);
	expect(wrapper.find(FooterLink)).toHaveClassName(className);
});
