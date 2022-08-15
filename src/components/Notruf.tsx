import { Button, Code, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { useUser } from "../contexts/user";

export function Notruf() {
	const { user } = useUser();
	const [gps, setGPS] = useState<GeolocationPosition>();

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			console.log("Got position", position.coords);
			setGPS(position);
		});
	}, []);

	function submitEmergency() {
		console.log(user, gps);
		console.log("Notruf wurde gesendet");
	}

	return (
		<>
			<div>
				<Text>Position:</Text>
				{gps ? (
					<div className="flex gap-4 flex-wrap">
						<Code>
							{gps.coords.latitude}°N {gps.coords.longitude}°E
						</Code>
						<Code>Genauigkeit: {gps.coords.accuracy}m</Code>
						<Code>Höhe: {gps.coords.altitude ? gps.coords.altitude + "m": "kA"}</Code>
					</div>
				) : (
					<Text>wird gesucht</Text>
				)}
			</div>
			<Button
				className="mt-4"
				fullWidth
				color="green"
				onClick={submitEmergency}
			>
				SENDEN
			</Button>
		</>
	);
}
