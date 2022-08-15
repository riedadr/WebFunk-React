import { useState } from "react";
import {
	AppShell,
	Navbar,
	Header,
	Footer,
	Text,
	MediaQuery,
	Burger,
	useMantineTheme,
} from "@mantine/core";
import { ThemeSwitch } from "./Shell/ThemeSwitch";
import logo from "../assets/images/pp-mue.png";
import { UserButton } from "./Shell/UserButton";
import { NotrufButton } from "./Shell/NotrufButton";
import { useUser } from "../contexts/user";
import { DeafButton } from "./Shell/DeafButton";

interface PropTypes {
	children: JSX.Element;
}

export default function Shell(props: PropTypes) {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);
	const { user } = useUser();

	return (
		<AppShell
			styles={{
				main: {
					background:
						theme.colorScheme === "dark"
							? theme.colors.dark[8]
							: theme.colors.gray[0],
				},
			}}
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
			navbar={
				<Navbar
					p="md"
					hiddenBreakpoint="sm"
					hidden={!opened}
					width={{ sm: 200, lg: 300 }}
				>
					<Text>Application navbar</Text>
				</Navbar>
			}
			footer={
				<Footer className="py-0 flex justify-between items-center" height={50} p="md">
					<div>
						<DeafButton />
					</div>
					{user && <Text className="text-bayerisch">{user}</Text>}
				</Footer>
			}
			header={
				<Header height={70} p="md">
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							height: "100%",
						}}
					>
						<MediaQuery
							largerThan="sm"
							styles={{ display: "none" }}
						>
							<Burger
								opened={opened}
								onClick={() => setOpened((o) => !o)}
								size="sm"
								color={theme.colors.gray[6]}
								mr="xl"
							/>
						</MediaQuery>

						<div className="flex gap-2 items-center">
							<img className="h-12" src={logo} alt="" />
							<div className="flex flex-col gap-0">
								<Text
									weight={700}
									size="lg"
									className="text-bayerisch"
								>
									WebFunk
								</Text>
								<Text className="text-bayerisch">
									Polizei München
								</Text>
							</div>
						</div>
						<div className="flex gap-2">
							<NotrufButton />
							<UserButton />
							<ThemeSwitch />
						</div>
					</div>
				</Header>
			}
		>
			<Text>Resize app to see responsive navbar in action</Text>
			{props.children}
		</AppShell>
	);
}
