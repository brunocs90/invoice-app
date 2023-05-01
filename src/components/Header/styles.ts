import styled from 'styled-components';
import { DEVICE_SIZE } from '../../constants';

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    background-color: ${({ theme }) => theme.header.bg};

    @media screen and (min-width: ${DEVICE_SIZE.lg}) {
        flex-direction: column;
        justify-content: left;
        align-items: flex-start;
        border-radius: 0 20px 20px 0;
    }

    .logo {
        display: flex;
        width: 6.438rem;
        height: 6.438rem;
        @media screen and (min-width: ${DEVICE_SIZE.lg}) {
            height: auto;
        }
    }
    .toggle-avatar {
        width: 100%;
        display: flex;
        justify-content: end;
        align-items: center;
        padding-right: 32px;

        @media screen and (min-width: ${DEVICE_SIZE.lg}) {
            height: 100%;
            flex-direction: column;
            padding-bottom: 32px;
            padding-right: 0;
        }
    }

    .separator {
        width: 1px;
        height: 100%;
        background-color: #494e6e;
        margin: 0 32px;

        @media screen and (min-width: ${DEVICE_SIZE.lg}) {
            width: 100%;
            height: 1px;
            margin: 32px 0 24px 0;
        }
    }
`;
