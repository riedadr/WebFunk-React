import ChannelButton from "./ChannelButton";
import { eaList } from "./eaList";

export default function EAs() {
	return (
		<>
			<div className="grid gap-2">
				{eaList.map((item, index) => {
					return <ChannelButton data={item} key={index} />;
				})}
			</div>
		</>
	);
}
