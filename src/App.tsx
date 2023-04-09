import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Router } from './Routes';
import { Header } from './components/Header';
import { useAppContext } from './context/AppContext';
import { GlobalStyle } from './styles/global';

export function App() {
    const { theme } = useAppContext();
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter>
                <Header />
                <Router />
            </BrowserRouter>
        </ThemeProvider>
    );
}
