import { createContext } from "react";

interface UserContext {
	token: string;
	loading: boolean;
	setToken: (token: string) => void;
	setLoading: (val: boolean) => void;
}

export default createContext<UserContext>({
	token: "",
	setToken: () => {
	},
	loading: false,
	setLoading: () => {
	},
});