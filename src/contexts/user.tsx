import { createContext, useContext, useState } from "react";

interface UserTypes {
	user: string;
	logIn: Function;
	logOut: VoidFunction;
}

const UserContext = createContext<UserTypes | null>(null);

export function useUser() {
	return useContext(UserContext);
}

export function UserProvider({children}) {
	const [user, setUser] = useState<string>(localStorage.user ? localStorage.user : null);

	function logIn(newUser: string) {
		setUser(newUser);
		localStorage.user = newUser;
	}

	function logOut() {
		setUser(null);
		localStorage.removeItem("user");
	}

    const value = {
        user,
        logIn,
        logOut
    }

    return (
		<div>
			<UserContext.Provider value={value}>
				{children}
			</UserContext.Provider>
		</div>
	);
}