import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Router } from './Routes';
import Header from './components/Header';
import { GlobalStyle } from './styles/global';
import { darkTheme } from './styles/themes/dark';
import { lightTheme } from './styles/themes/light';

export function App() {
    //usar localstorage
    //https://dev.to/viniciusmdias/how-to-create-a-theme-in-react-typescript-with-styled-components-3fn
    const [theme, setTheme] = useState<DefaultTheme>(lightTheme);
    const toggleTheme = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter>
                <Header toggleTheme={toggleTheme} />
                <Router />
            </BrowserRouter>
        </ThemeProvider>
    );
}
