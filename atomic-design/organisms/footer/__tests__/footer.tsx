import React from "react";
import { mount } from "enzyme";
import { Footer } from "../src";
import { Wrapper } from "@evernest/dev-helpers";

test("Footer renders children", () => {
	const text = "Hello World!";
	const wrapper = mount(
		<Wrapper>
			<Footer>{text}</Footer>
		</Wrapper>
	);
	expect(wrapper.find(Footer).text()).toEqual(text);
});

test("Footer allows setting classname", () => {
	const className = "test";
	const wrapper = mount(
		<Wrapper>
			<Footer className={className} />
		</Wrapper>
	);
	expect(wrapper.find(Footer)).toHaveClassName(className);
});
