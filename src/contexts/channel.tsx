import { createContext, useContext, useState } from "react";

interface ChannelTypes {
	deaf: boolean;
	toggleDeaf: VoidFunction;
	mute: boolean;
	toggleMute: VoidFunction;
	channel: string;
	vc: string;
	tc: string;
	joinChannel: Function;
	leaveChannel: VoidFunction;
}

const ChannelContext = createContext<ChannelTypes | null>(null);

export function useChannel() {
	return useContext(ChannelContext);
}

export function ChannelProvider({ children }) {
	const [deaf, setDeaf] = useState<boolean>(false);
	const [mute, setMute] = useState<boolean>(false);
	const [channel, setChannel] = useState<string>(null);
	const [vc, setVc] = useState<string>(null);
	const [tc, setTc] = useState<string>(null);

	function toggleDeaf() {
		setDeaf(!deaf);
	}
	function toggleMute() {
		setMute(!mute);
	}

	function joinChannel(newChannel: string, newVc: string, newTc: string) {
		if (channel) leaveChannel();

		setChannel(newChannel);
		setVc(newVc);
		setTc(newTc);
		console.log(newChannel, "betreten");
	}
	function leaveChannel() {
		console.log(channel, "verlassen");
		setChannel(null);
		setVc(null);
		setTc(null);
	}

	const value = {
		deaf,
		toggleDeaf,
		mute,
		toggleMute,
		channel,
		vc,
		tc,
		joinChannel,
		leaveChannel,
	};

	return (
		<div>
			<ChannelContext.Provider value={value}>
				{children}
			</ChannelContext.Provider>
		</div>
	);
}
