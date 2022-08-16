import { Button } from "@mantine/core";
import { useChannel } from "../../contexts/channel";

interface PropType {
	data: DataType;
}

interface DataType {
	name: string;
	vcId: string;
	tcId: string;
}

export default function ChannelButton(props: PropType) {
	const { joinChannel, channel } = useChannel();
	const data = props.data;
	return (
		<Button
			variant={data.name === channel ? "filled" : "light"}
			onClick={() => {
				joinChannel(data.name, data.vcId, data.tcId);
			}}
		>
			{data.name}
		</Button>
	);
}
