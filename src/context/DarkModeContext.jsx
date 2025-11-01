import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem("isDarkMode") === "true");

    useEffect(
        function () {
            if (isDarkMode) {
                document.documentElement.classList.add("dark-mode");
                document.documentElement.classList.remove("light-mode");
            } else {
                document.documentElement.classList.add("light-mode");
                document.documentElement.classList.remove("dark-mode");
            }
        },
        [isDarkMode]
    );

    function toggleDarkMode() {
        setIsDarkMode((isDark) => {
            const newValue = !isDark;
            localStorage.setItem("isDarkMode", newValue);

            return newValue;
        });
    }

    return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
}

function useDarkMode() {
    const context = useContext(DarkModeContext);
    if (context === undefined) throw new Error("DarkModeContext was used outside of the scope of DarkModeProvider");

    return context;
}

export { DarkModeProvider, useDarkMode };
