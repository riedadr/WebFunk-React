import { Button, Text } from "@mantine/core";
import Shell from "../components/Shell";
import { useChannel } from "../contexts/channel";
import Channel from "./Channel";

export default function Home() {
	const { channel, vc, tc, leaveChannel } = useChannel();

  if (!vc && !tc) return <div>Klicke auf einen Kanal, um diesem beizutreten</div>
	else return (
		<Channel vc={vc} tc={tc} channel={channel}/>
	);
}
