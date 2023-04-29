import { ReactNode } from 'react';
import { Header } from '../components/Header';
import { ContentContainer, MainContainer } from './styles';

type Props = {
    children: ReactNode;
};

export function MainLayout({ children }: Props) {
    return (
        <MainContainer>
            <Header />
            <ContentContainer>{children}</ContentContainer>
        </MainContainer>
    );
}
