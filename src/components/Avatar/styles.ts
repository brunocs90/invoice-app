import styled from 'styled-components';

const borderColor = '#494e6e';

export const AvatarContainer = styled.div`
    padding: 0 1.5rem;
    display: flex;
    border-left: 1px solid ${borderColor};
    border: solid white;

    @media screen and (min-width: 1200px) {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 1.5rem;
        border-left: none;
        border-top: 1px solid ${borderColor};
        margin: 0;
        border: solid pink;
    }
`;

export const AvatarHolder = styled.div`
    margin: auto;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;

    @media screen and (min-width: 1200px) {
        width: 2.5rem;
        height: 2.5rem;
    }
`;

export const AvatarImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
