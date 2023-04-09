import { ThemeToggle } from '../ThemeToggle';
import { HeaderContainer, Logo } from './styles';

import imageLogo from '../../assets/logo.svg';
import { Avatar } from '../Avatar';

export function Header() {
    return (
        <HeaderContainer>
            <Logo src={imageLogo} alt="Invoice app logo" />
            <ThemeToggle />
            <Avatar />
        </HeaderContainer>
    );
}
