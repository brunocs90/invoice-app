import styled from 'styled-components';
import { DEVICE_SIZE } from '../../constants';

export const HeaderContainer = styled.header`
    border: solid yellow;
    display: flex;
    flex-direction: row;
    background-color: ${({ theme }) => theme.header.bg};

    @media screen and (min-width: ${DEVICE_SIZE.lg}) {
        flex-direction: column;
        justify-content: left;
        align-items: flex-start;
    }
`;

export const Logo = styled.img`
    width: 6.438rem;
    height: 6.438rem;
    @media screen and (min-width: ${DEVICE_SIZE.lg}) {
        height: auto;
    }
`;
