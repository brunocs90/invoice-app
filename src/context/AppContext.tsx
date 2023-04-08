import { createContext, ReactNode, useState } from 'react';

type AppProviderProps = { children: ReactNode };
type AppContext = {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export const AppContext = createContext<AppContext>({} as AppContext);

export function AppProvider({ children }: AppProviderProps) {
    const [theme, setTheme] = useState<string>('light');

    return <AppContext.Provider value={{ theme, setTheme }}>{children}</AppContext.Provider>;
}
