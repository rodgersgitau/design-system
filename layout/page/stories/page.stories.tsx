import React from "react";
import { withWrapper } from "@evernest/dev-helpers";
import { EvernestLogo } from "@evernest/evernest-logo";
import { Footer } from "@evernest/footer";
import { FooterLink } from "@evernest/footer-link";
import { Column, Flex, Grid, GridOverlay, Row } from "@evernest/grid";
import { Header } from "@evernest/header";
import { HeaderLink } from "@evernest/header-link";
import { Menu, MenuDirection } from "@evernest/menu";
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
										<Menu aria-label="header-navigation-1">
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
					<Footer>
						<Grid overflow>
							<Row>
								<Column l={4} raw>
									<Menu
										direction={MenuDirection.vertical}
										aria-label="footer-navigation-1"
									>
										<FooterLink href="#">Link 1</FooterLink>
										<FooterLink href="#">Link 2</FooterLink>
									</Menu>
								</Column>
								<Column l={4} raw>
									<Menu
										direction={MenuDirection.vertical}
										aria-label="footer-navigation-2"
									>
										<FooterLink href="#">Link 1</FooterLink>
										<FooterLink href="#">Link 2</FooterLink>
									</Menu>
								</Column>
								<Column l={4} raw>
									<Menu
										direction={MenuDirection.vertical}
										aria-label="footer-navigation-3"
									>
										<FooterLink href="#">Link 1</FooterLink>
										<FooterLink href="#">Link 2</FooterLink>
									</Menu>
								</Column>
							</Row>
						</Grid>
					</Footer>
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
