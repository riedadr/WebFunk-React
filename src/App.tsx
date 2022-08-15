import Home from "./pages/Home";
import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { UserProvider } from "./contexts/user";
import { ChannelProvider } from "./contexts/channel";

export function App(): JSX.Element {
	const [colorScheme, setColorScheme] = useState<ColorScheme>(
		localStorage.scheme ? localStorage.scheme : "light"
	);
	const toggleColorScheme = (value?: ColorScheme) => {
		const newScheme = value || (colorScheme === "dark" ? "light" : "dark");
		localStorage.scheme = newScheme;
		document.body.className = newScheme;
		setColorScheme(newScheme);
	};

	useEffect(() => {
		document.body.className = localStorage.scheme
			? localStorage.scheme
			: "light";
	}, []);

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider
				theme={{ colorScheme }}
				withGlobalStyles
				withNormalizeCSS
			>
				<UserProvider>
					<ChannelProvider>
						<Home />
					</ChannelProvider>
				</UserProvider>
			</MantineProvider>
		</ColorSchemeProvider>
	);
}
