import { ActionIcon } from "@mantine/core";
import { IconSun, IconVolume, IconVolume3 } from "@tabler/icons";
import { useState } from "react";

export function DeafButton() {
	const [deaf, setDeaf] = useState<boolean>(false);

	return (
		<ActionIcon
			variant={deaf ? "filled" : "outline"}
			color="blue"
			onClick={() => {
				setDeaf(!deaf);
			}}
			title="Taubschalten"
		>
			{deaf ? <IconVolume3 size={18} /> : <IconVolume size={18} />}
		</ActionIcon>
	);
}
