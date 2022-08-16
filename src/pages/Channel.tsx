import { Button, Text } from "@mantine/core";
import { useEffect } from "react";
import { useChannel } from "../contexts/channel";

interface DataType {
	channel: string;
	vc: string;
	tc: string;
}

export default function Channel({ vc, tc, channel }: DataType) {
	const { leaveChannel } = useChannel();

	useEffect(() => {
		return () => {
			leaveChannel();
		};
	}, []);

	return (
		<>
			<div className="w-full h-full flex flex-col justify-between">
				<Text weight={700}>Kanal: {channel}</Text>
				<Text weight={700}>
					VC: {vc} TC: {tc}
				</Text>
				<Button color="red" onClick={leaveChannel}>
					Kanal verlassen
				</Button>
			</div>
		</>
	);
}
