import styled from 'styled-components';

export const ButtonContainer = styled.button`
    display: flex;
    height: 48px;
    align-items: center;

    border: none;
    cursor: pointer;
    border-radius: 24px;

    background-color: ${({ theme }) => theme.button.primary.bg};

    &:hover {
        background-color: ${({ theme }) => theme.button.primary.hover.bg};
    }

    .text-button {
        font-family: Spartan, sans-serif;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: -0.25px;
        padding: 1.125rem 1rem 0.938rem 1rem;

        color: ${({ theme }) => theme.button.primary.color};

        &:hover {
            color: ${({ theme }) => theme.button.primary.hover.color};
        }
    }

    .icon-button {
        width: 2rem;
        height: 2rem;
    }
`;
