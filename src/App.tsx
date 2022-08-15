import Home from "./pages/Home";
import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
} from "@mantine/core";
import { useState } from "react";

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
				<Home />
			</MantineProvider>
		</ColorSchemeProvider>
	);
}
