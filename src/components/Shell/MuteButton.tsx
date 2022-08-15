import { ActionIcon } from "@mantine/core";
import { IconMicrophone, IconMicrophoneOff } from "@tabler/icons";
import { useChannel } from "../../contexts/channel";

export function MuteButton() {
	const { mute, toggleMute } = useChannel();

	return (
		<ActionIcon
			variant={mute ? "filled" : "outline"}
			color="blue"
			onClick={() => toggleMute()}
			title="Taubschalten"
		>
			{mute ? (
				<IconMicrophoneOff size={18} />
			) : (
				<IconMicrophone size={18} />
			)}
		</ActionIcon>
	);
}
