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
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 0.4375rem;

        @media screen and (min-width: ${DEVICE_SIZE.md}) {
            font-size: 2rem;
        }
    }

    .invoicesCount {
        font-size: 0.75rem;
        font-weight: 500;
        color: ${({ theme }) => theme.text.color1};
        letter-spacing: -0.1px;
    }
`;
