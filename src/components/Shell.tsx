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
	Button,
	Accordion,
} from "@mantine/core";
import { ThemeSwitch } from "./Shell/ThemeSwitch";
import logo from "../assets/images/pp-mue.png";
import { UserButton } from "./Shell/UserButton";
import { NotrufButton } from "./Shell/NotrufButton";
import { useUser } from "../contexts/user";
import { DeafButton } from "./Shell/DeafButton";
import { MuteButton } from "./Shell/MuteButton";
import { IconRadio, IconSearch, IconUrgent } from "@tabler/icons";
import EAs from "./Channels/EAs";
import KFDs from "./Channels/KFDs";
import { useChannel } from "../contexts/channel";
import Channel from "../pages/Channel";
import Home from "../pages/Home";


export default function Shell() {
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
					style={{ padding: 0 }}
				>
					<Navbar.Section grow>
						<Text className="p-2">Kanäle</Text>
						<Accordion defaultValue="EA">
							<Accordion.Item value="EA">
								<Accordion.Control icon={<IconRadio />}>
									Abschnitte
								</Accordion.Control>
								<Accordion.Panel>
									<EAs />
								</Accordion.Panel>
							</Accordion.Item>
							<Accordion.Item value="K">
								<Accordion.Control icon={<IconSearch />}>
									KFD
								</Accordion.Control>
								<Accordion.Panel>
									<KFDs />
								</Accordion.Panel>
							</Accordion.Item>
							<Accordion.Item value="Lage">
								<Accordion.Control icon={<IconUrgent />}>
									Lage
								</Accordion.Control>
								<Accordion.Panel>
									<EAs />
								</Accordion.Panel>
							</Accordion.Item>
						</Accordion>
					</Navbar.Section>
				</Navbar>
			}
			footer={
				<Footer
					className="py-0 flex justify-between items-center"
					height={50}
					p="md"
				>
					<div className="flex gap-2">
						<DeafButton />
						<MuteButton />
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
			<Display />
		</AppShell>
	);
}

function Display() {
	const { channel } = useChannel();
	if (channel) return <Channel />
	else return <Home />
}