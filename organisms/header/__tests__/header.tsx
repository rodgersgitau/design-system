import React from "react";
import { mount } from "enzyme";
import { Header } from "../src";
import { Wrapper } from "@evernest/dev-helpers";

test("Header renders children", () => {
	const text = "Hello World!";
	const wrapper = mount(
		<Wrapper>
			<Header>{text}</Header>
		</Wrapper>
	);
	expect(wrapper.find(Header).text()).toEqual(text);
});

test("Header allows setting classname", () => {
	const className = "test";
	const wrapper = mount(
		<Wrapper>
			<Header className={className} />
		</Wrapper>
	);
	expect(wrapper.find(Header)).toHaveClassName(className);
});
