import { Button, Code, Text } from "@mantine/core";
import { useChannel } from "../contexts/channel";


export default function Channel() {
	const { channel, vc, tc, leaveChannel } = useChannel();

	return (
		<>
			<div className="w-full h-full flex flex-col justify-between">
				<Text weight={700}>Kanal: {channel} (<Code>{vc} | {tc}</Code>)</Text>
				<Button color="red" onClick={leaveChannel}>
					Kanal verlassen
				</Button>
			</div>
		</>
	);
}
