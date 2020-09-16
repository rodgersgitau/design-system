import React from "react";
import { mount } from "enzyme";
import { Page } from "../src";
import { Wrapper } from "@evernest/dev-helpers";

test("Page renders children", () => {
	const text = "Hello Page";
	const wrapper = mount(
		<Wrapper>
			<Page>{text}</Page>
		</Wrapper>
	);
	expect(wrapper.find(Page).text()).toEqual(text);
});

test("Page allows setting classname", () => {
	const className = "test";
	const wrapper = mount(
		<Wrapper>
			<Page className={className}>1</Page>
		</Wrapper>
	);
	expect(wrapper.find(Page)).toHaveClassName(className);
});
