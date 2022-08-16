import ChannelButton from "./ChannelButton";
import { kfdList } from "./kfdList";

export default function KFDs() {
	return (
		<>
			<div className="grid gap-2">
				{kfdList.map((item, index) => {
					return <ChannelButton data={item} key={index} />;
				})}
			</div>
		</>
	);
}
