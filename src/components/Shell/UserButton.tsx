import {
	ActionIcon,
	Button,
	Modal,
	Text,
	TextInput,
	TextInputProps,
} from "@mantine/core";
import { IconUser } from "@tabler/icons";
import { FormEvent, useRef, useState } from "react";
import { useUser } from "../../contexts/user";

export function UserButton() {
	const { user, logIn, logOut } = useUser();
	const [opened, setOpened] = useState<boolean>(false);
	const [error, setError] = useState<boolean | string>(false);
	const userRef = useRef<TextInputProps | null>(null);

	function submit(e: FormEvent) {
		e.preventDefault();
		const input = userRef.current?.value.toUpperCase();
		if (input) {
			logIn(input);
			setError(false);
			setOpened(false);
		} else {
			setError("Keine Eingabe erkannt");
		}
	}

	return (
		<>
			<Modal
				opened={!user || opened}
				onClose={() => setOpened(false)}
				title="Anmelden"
			>
				<form onSubmit={submit}>
					<Text>Bitte Funkrufnamen eingeben</Text>
					<TextInput
						placeholder={user || "IR12/34"}
						label="Funkrufname"
						ref={userRef}
                        error={error}
						required
					/>
					<div className="mt-4 flex gap-4 justify-between">
						<Button color="green" onClick={submit}>
							{user ? "ändern" : "anmelden"}
						</Button>
						{user && (
							<Button color="red" onClick={logOut}>
								abmelden
							</Button>
						)}
					</div>
				</form>
			</Modal>
			<ActionIcon
				variant="outline"
				color="green"
				onClick={() => setOpened(true)}
				title="Toggle color scheme"
			>
				<IconUser size={18} />
			</ActionIcon>
		</>
	);
}
