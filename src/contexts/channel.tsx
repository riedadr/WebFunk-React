import { createContext, useContext, useState } from "react";

interface ChannelTypes {
	deaf: boolean;
	toggleDeaf: VoidFunction;
	mute: boolean;
	toggleMute: VoidFunction;
}

const ChannelContext = createContext<ChannelTypes | null>(null);

export function useUser() {
	return useContext(ChannelContext);
}

export function ChannelProvider({ children }) {
	const [deaf, setDeaf] = useState<boolean>(false);
	const [mute, setMute] = useState<boolean>(false);

	function toggleDeaf() {
		setDeaf(!deaf);
	}
	function toggleMute() {
		setMute(!mute);
	}

	const value = {
		deaf,
		toggleDeaf,
		mute,
		toggleMute,
	};

	return (
		<div>
			<ChannelContext.Provider value={value}>
				{children}
			</ChannelContext.Provider>
		</div>
	);
}
