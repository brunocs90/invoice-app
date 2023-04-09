import { ReactNode, createContext, useCallback, useContext, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { darkTheme } from '../styles/themes/dark';
import { lightTheme } from '../styles/themes/light';

interface AppContextType {
    theme: DefaultTheme;
    toggleTheme: () => void;
}

const AppContext = createContext<AppContextType>({
    theme: lightTheme,
    toggleTheme: () => {},
});

interface AppProviderProps {
    children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
    const [theme, setTheme] = useState<DefaultTheme>(() => {
        return localStorage.getItem('theme') === 'dark' ? darkTheme : lightTheme;
    });

    const toggleTheme = useCallback(() => {
        const newTheme = theme === lightTheme ? darkTheme : lightTheme;
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme === lightTheme ? 'light' : 'dark');
    }, [setTheme, theme]);

    const appContextValue: AppContextType = {
        theme,
        toggleTheme,
    };

    return (
        <AppContext.Provider value={appContextValue}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppContext.Provider>
    );
}

function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within AppProvider');
    }
    return context;
}

export { AppProvider, useAppContext };
