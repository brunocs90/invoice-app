import styled from 'styled-components';

export const ButtonContainer = styled.button`
    width: 1.875rem;
    height: 1.875rem;
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: 1.4375rem;
    align-self: center;
    color: ${({ theme }) => theme.themeToggleButton.color};
    &:hover {
        color: ${({ theme }) => theme.themeToggleButton.hover.color};
    }
    @media screen and (min-width: 1200px) {
        margin: 0 auto;
        position: absolute;
        bottom: 117px;
        left: 0;
        right: 0;
    }
`;
