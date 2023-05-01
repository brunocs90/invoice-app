import styled from 'styled-components';
import { DEVICE_SIZE } from '../../constants';

export const HomePageContainer = styled.div`
    width: 327px;
    display: flex;
    border: solid black;

    @media screen and (min-width: ${DEVICE_SIZE.md}) {
        width: 672px;
    }
    @media screen and (min-width: ${DEVICE_SIZE.lg}) {
        width: 730px;
    }
`;

export const HomeHeader = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;

    border: solid red;

    .heading {
        font-weight: 700;
        font-style: normal;

        font-size: 1.25rem;
        line-height: 22px;
        letter-spacing: -0.75px;

        @media screen and (min-width: ${DEVICE_SIZE.md}) {
            font-size: 2rem;
            line-height: 33px;
            letter-spacing: -1.125px;
        }
    }

    .invoicesCount {
        font-size: 0.75rem;
        font-weight: 500;
        color: ${({ theme }) => theme.text.color1};
        letter-spacing: -0.1px;
    }
`;
