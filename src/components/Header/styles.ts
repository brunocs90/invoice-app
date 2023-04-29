import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: relative;
    background-color: ${({ theme }) => theme.header.bg};
    display: flex;
    z-index: 9999;
    @media screen and (min-width: 1200px) {
        border: solid purple;
        position: fixed;
        display: block;
        top: 0;
        left: 0;
        width: 6.4375rem;
        height: 100%;
        border-radius: 0 1.25rem 1.25rem 0;
    }
`;

export const Logo = styled.img`
    width: 4.5rem;
    height: 4.5rem;
    @media screen and (min-width: 1200px) {
        width: 100%;
        height: auto;
    }
`;
