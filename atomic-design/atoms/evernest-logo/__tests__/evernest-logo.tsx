import React from "react";
import { mount } from "enzyme";
import { EvernestLogo } from "../src";
import { Wrapper } from "@evernest/dev-helpers";

test("EvernestLogo allows setting classname", () => {
	const className = "test";
	const wrapper = mount(
		<Wrapper>
			<EvernestLogo className={className} />
		</Wrapper>
	);
	expect(wrapper.find(EvernestLogo)).toHaveClassName(className);
});
