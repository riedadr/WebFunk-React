import { ActionIcon } from "@mantine/core";
import { IconVolume, IconVolume3 } from "@tabler/icons";
import { useChannel } from "../../contexts/channel";

export function DeafButton() {
	const {deaf, toggleDeaf} = useChannel();

	return (
		<ActionIcon
			variant={deaf ? "filled" : "outline"}
			color="blue"
			onClick={() => toggleDeaf()}
			title="Taubschalten"
		>
			{deaf ? <IconVolume3 size={18} /> : <IconVolume size={18} />}
		</ActionIcon>
	);
}
