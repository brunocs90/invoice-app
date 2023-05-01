import avatar from '../../assets/image-avatar.jpg';
import { AvatarContainer, AvatarImage } from './styles';

export function Avatar() {
    return (
        <AvatarContainer>
            <AvatarImage src={avatar} alt="User profile picture" />
        </AvatarContainer>
    );
}
