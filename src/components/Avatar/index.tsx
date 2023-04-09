import avatar from '../../assets/image-avatar.jpg';
import { AvatarContainer, AvatarHolder, AvatarImage } from './styles';

export function Avatar() {
    return (
        <AvatarContainer>
            <AvatarHolder>
                <AvatarImage src={avatar} alt="User profile picture" />
            </AvatarHolder>
        </AvatarContainer>
    );
}
