import React from "react";
import { mount } from "enzyme";
import { Button } from "../src";

test("Button renders children", () => {
	const text = "Hello Button";
	const wrapper = mount(
		<div>
			<Button>{text}</Button>
		</div>
	);
	expect(wrapper.find(Button).text()).toEqual(text);
});

test("Button allows setting classname", () => {
	const text = "Hello Button";
	const className = "test";
	const wrapper = mount(
		<div>
			<Button className={className}>{text}</Button>
		</div>
	);
	expect(wrapper.find(Button)).toHaveClassName(className);
});
