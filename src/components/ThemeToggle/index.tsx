import { useAppContext } from '../../context/AppContext';
import { darkTheme } from '../../styles/themes/dark';

import { MoonIcon } from './MoonIcon';
import { SunIcon } from './SunIcon';
import { ButtonContainer } from './styles';

export function ThemeToggle() {
    const { theme, toggleTheme } = useAppContext();
    return (
        <ButtonContainer onClick={toggleTheme}>
            <span aria-hidden="true">{theme === darkTheme ? <SunIcon /> : <MoonIcon />}</span>
        </ButtonContainer>
    );
}
