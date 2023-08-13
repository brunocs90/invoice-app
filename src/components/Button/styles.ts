import styled from 'styled-components';
import { DEVICE_SIZE } from '../../constants';

export const ButtonContainer = styled.button`
    display: flex;
    width: 90px;
    height: 44px;
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
        padding-left: 0.5rem;
        padding-top: 18px;
        padding-bottom: 15px;

        color: ${({ theme }) => theme.button.primary.color};

        &:hover {
            color: ${({ theme }) => theme.button.primary.hover.color};
        }
    }

    .icon-button {
        width: 2rem;
        height: 2rem;
        margin-left: 2px;
    }

    @media screen and (min-width: ${DEVICE_SIZE.md}) {
        width: 150px;
        height: 48px;

        .text-button {
            padding-left: 1rem;
        }
    }
    @media screen and (min-width: ${DEVICE_SIZE.lg}) {
        width: 150px;
        height: 48px;

        .text-button {
            padding-left: 1rem;
        }
    }
`;
