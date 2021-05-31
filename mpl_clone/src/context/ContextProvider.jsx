import React, { createContext, useState } from "react";
export const Context = createContext();
export const ContextProvider = ({ children }) => {
	const [change, setChange] = useState(false);

	const handleChange = () => {
		setChange((prev) => !prev);
	};

	const value = {
		change,
		setChange,
		handleChange,
	};
	return (
		<>
			<Context.Provider value={value}>{children}</Context.Provider>
		</>
	);
};
