import React from "react";
import { withWrapper } from "@evernest/dev-helpers";
import { EvernestLogo } from "@evernest/evernest-logo";
import { Footer } from "@evernest/footer";
import { Column, Flex, Grid, GridOverlay, Row } from "@evernest/grid";
import { HeaderLink } from "@evernest/header-link";
import { Header } from "@evernest/header";
import { Menu } from "@evernest/menu";
import { withTests } from "@storybook/addon-jest";
import { Meta, Story } from "@storybook/react";
import {
	Footer as FooterArea,
	Header as HeaderArea,
	Main as MainArea,
	PageWithStyles as Page,
} from "../src";
import results from "./page.testresults.json";

export const PageLayout: Story = () => {
	return (
		<>
			<GridOverlay toggle />
			<Page>
				<HeaderArea>
					<Header fixed>
						<Grid overflow>
							<Row>
								<Column raw>
									<Flex>
										<EvernestLogo />
										<Menu>
											<HeaderLink href="#">Link 1</HeaderLink>
											<HeaderLink href="#">Link 2</HeaderLink>
											<HeaderLink href="#">Link 3</HeaderLink>
											<HeaderLink href="#">Link 4</HeaderLink>
											<HeaderLink href="#">Link 5</HeaderLink>
										</Menu>
									</Flex>
								</Column>
							</Row>
						</Grid>
					</Header>
				</HeaderArea>
				<MainArea />
				<FooterArea>
					<Footer />
				</FooterArea>
			</Page>
		</>
	);
};

const story: Meta = {
	component: Grid,
	title: "Design System/Layout/Page",
	decorators: [withTests({ results }), withWrapper()],
	parameters: {
		jest: ["page"],
		docs: {
			inlineStories: false,
			iframeHeight: 500,
		},
	},
};

export default story;
