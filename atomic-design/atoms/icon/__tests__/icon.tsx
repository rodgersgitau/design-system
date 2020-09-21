import React from "react";
import { mount } from "enzyme";
import { Icon, Size } from "../src";

test("Icon contains text", () => {
	const wrapper = mount(
		<div>
			<Icon size={Size.medium} icon="instagram" />
		</div>
	);
	expect(wrapper.find(Icon).text()).toEqual("Instagram");
});

test("Icon allows setting classname", () => {
	const className = "test";
	const wrapper = mount(
		<div>
			<Icon className={className} size={Size.medium} icon="instagram" />
		</div>
	);
	expect(wrapper.find(Icon)).toHaveClassName(className);
});
