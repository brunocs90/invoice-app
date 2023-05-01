import { ReactNode } from 'react';
import { MainPageContainer } from './styles';

interface LayoutDefaultProps {
    children: ReactNode;
}

export default function LayoutDefault({ children }: LayoutDefaultProps) {
    return (
        <>
            <MainPageContainer>{children}</MainPageContainer>
        </>
    );
}
