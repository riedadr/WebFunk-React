import { ActionIcon, Button, Modal } from "@mantine/core";
import { IconSos } from "@tabler/icons";
import { useState } from "react";
import { Notruf } from "../Notruf";

export function NotrufButton() {
	const [opened, setOpened] = useState<boolean>(false);

	return (
		<>
			<Modal
				opened={opened}
				onClose={() => setOpened(false)}
				title="Notruf"
			>
				<Notruf />
				<Button className="mt-4" fullWidth color="red" onClick={() => setOpened(false)}>
					ABBRECHEN
				</Button>
			</Modal>
			<ActionIcon
				variant="outline"
				color="red"
				onClick={() => setOpened(true)}
				title="Toggle color scheme"
			>
				<IconSos size={18} />
			</ActionIcon>
		</>
	);
}
