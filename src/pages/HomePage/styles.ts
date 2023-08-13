import styled from 'styled-components';
import { DEVICE_SIZE } from '../../constants';

export const HomePageContainer = styled.div`
    width: 420px;
    padding: 1.5rem 1.5rem 6.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    border: solid white;

    @media screen and (min-width: ${DEVICE_SIZE.md}) {
        min-width: 720px;
        padding-top: 3.8rem;
    }
    @media screen and (min-width: ${DEVICE_SIZE.lg}) {
        min-width: 778px;
        padding-top: 4.8rem;
    }
`;

export const HomeHeader = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    justify-content: space-between;
    /* border: solid red; */
`;

export const Title = styled.div`
    /* border: solid yellow; */
    .heading {
        font-weight: 700;
        font-style: normal;

        font-size: 24px;
        line-height: 22px;
        letter-spacing: -0.75px;

        @media screen and (min-width: ${DEVICE_SIZE.md}) {
            /* border: solid red; */
            font-size: 2rem;
            line-height: 33px;
            letter-spacing: -1.125px;
        }
    }

    .invoicesCount {
        font-style: normal;
        font-weight: 500;

        font-size: 13px;
        line-height: 15px;
        letter-spacing: -0.1px;

        color: ${({ theme }) => theme.text.color1};
        padding-top: 3px;
    }
`;

export const ItemsAction = styled.div`
    display: flex;
    /* border: solid purple; */
    align-items: center;

    .container-filter {
        margin-right: 18px;
    }

    @media screen and (min-width: ${DEVICE_SIZE.md}) {
        .container-filter {
            margin-right: 40px;
        }
    }
    @media screen and (min-width: ${DEVICE_SIZE.lg}) {
        .container-filter {
            margin-right: 40px;
        }
    }
`;

export const ListInvoiceContainer = styled.div`
    padding-top: 4rem;
    height: 100%;
    /* border: solid red; */

    /* Adiciona espaçamento vertical entre os itens
    o seletor > * + * seleciona todos os elementos filhos diretos (*) que são precedidos por outro elemento (+) dentro do componente */
    > * + * {
        margin-top: 1rem;
    }
`;
