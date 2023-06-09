import { HeaderContainer } from './styles';

import imageLogo from '../../assets/logo.svg';
import { Avatar } from '../Avatar';
import { ThemeToggle } from '../ThemeToggle';

export function Header() {
    return (
        <HeaderContainer>
            <img className="logo" src={imageLogo} alt="Invoice app logo" />
            <div className="toggle-avatar">
                <ThemeToggle />
                <div className="separator"></div>
                <Avatar />
            </div>
        </HeaderContainer>
    );
}
