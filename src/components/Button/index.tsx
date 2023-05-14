import { ButtonContainer } from './styles';

interface ButtonProps {
    icon?: string;
    text: string;
    onClick: () => void;
}

export function Button({ icon, text, onClick }: ButtonProps) {
    const handleClick = () => {
        onClick();
    };

    return (
        <ButtonContainer onClick={handleClick}>
            {icon && <img className="icon-button" src={icon} alt="" />}
            <div className="text-button">{text}</div>
        </ButtonContainer>
    );
}
