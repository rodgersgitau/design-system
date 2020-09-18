import React from "react";
import { mount } from "enzyme";
import { Anchor, Panel } from "../src";
import { Wrapper } from "@evernest/dev-helpers";

test("Panel renders children", () => {
	const text = "Hello World!";
	const wrapper = mount(
		<Wrapper>
			<Panel anchor={Anchor.left}>{text}</Panel>
		</Wrapper>
	);
	expect(wrapper.find(Panel).text()).toEqual(text);
});

test("Panel allows setting classname", () => {
	const className = "test";
	const wrapper = mount(
		<Wrapper>
			<Panel anchor={Anchor.left} className={className} />
		</Wrapper>
	);
	expect(wrapper.find(Panel)).toHaveClassName(className);
});
