import { ButtonContainer } from './styles';

interface ButtonProps {
    icon?: string;
    text: string;
}

export function Button({ icon, text }: ButtonProps) {
    return (
        <ButtonContainer>
            {icon && <img className="icon-button" src={icon} alt="" />}
            <div className="text-button">{text}</div>
        </ButtonContainer>
    );
}
