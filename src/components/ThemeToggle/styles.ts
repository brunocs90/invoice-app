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
    align-self: center;
    color: ${({ theme }) => theme.themeToggleButton.color};
    /* border: solid purple; */
    &:hover {
        color: ${({ theme }) => theme.themeToggleButton.hover.color};
    }
`;
