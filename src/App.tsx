import { BrowserRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Router } from './Routes';
import { Header } from './components/Header';
import { useAppContext } from './context/AppContext';
import { GlobalStyle } from './styles/global';

export const MainContainer = styled.div`
    /* border: solid red; */
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1200px) {
        flex-direction: row;
    }
`;

export function App() {
    const { theme } = useAppContext();
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter>
                <MainContainer>
                    <Header />
                    <Router />
                </MainContainer>
            </BrowserRouter>
        </ThemeProvider>
    );
}
