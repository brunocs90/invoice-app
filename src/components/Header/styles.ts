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

    .logo {
        display: flex;
        width: 6.438rem;
        height: 6.438rem;
        border: solid blue;
        @media screen and (min-width: ${DEVICE_SIZE.lg}) {
            height: auto;
        }
    }
    .toggle-avatar {
        width: 100%;
        display: flex;
        justify-content: end;
        align-items: center;
        border: solid white;

        @media screen and (min-width: ${DEVICE_SIZE.lg}) {
            height: 100%;
            flex-direction: column;
        }
    }
`;
