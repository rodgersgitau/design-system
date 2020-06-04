import React from "react";
import { mount } from "enzyme";
import { Icon } from "../src";

test("Icon contains text", () => {
	const wrapper = mount(
		<div>
			<Icon icon="accessibility" />
		</div>
	);
	expect(wrapper.find(Icon).text()).toEqual("Accessibility");
});
