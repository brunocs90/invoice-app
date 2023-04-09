import { ReactNode, createContext, useCallback, useContext, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { darkTheme } from '../styles/themes/dark';
import { lightTheme } from '../styles/themes/light';

type AppContextType = {
    theme: DefaultTheme;
    toggleTheme: () => void;
};

const AppContext = createContext<AppContextType>({
    theme: lightTheme,
    toggleTheme: () => {},
});

type AppProviderProps = {
    children: ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
    const [theme, setTheme] = useState<DefaultTheme>(() =>
        localStorage.getItem('theme') === 'dark' ? darkTheme : lightTheme,
    );
    const toggleTheme = useCallback(() => {
        const newTheme = theme === lightTheme ? darkTheme : lightTheme;
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme === lightTheme ? 'light' : 'dark');
    }, [setTheme, theme]);

    const appContextValue = {
        theme,
        toggleTheme,
    };

    return (
        <AppContext.Provider value={appContextValue}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppContext.Provider>
    );
};

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
