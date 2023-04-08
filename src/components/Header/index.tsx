import ThemeToggle from '../ThemeToggle';
import { HeaderContainer } from './styles';

interface Props {
    toggleTheme(): void;
}

export default function Header({ toggleTheme }: Props) {
    return (
        <HeaderContainer>
            <h1>Header</h1>
            <ThemeToggle toggleTheme={toggleTheme} />
        </HeaderContainer>
    );
}
