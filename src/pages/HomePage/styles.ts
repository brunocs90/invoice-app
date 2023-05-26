import styled from 'styled-components';
import { DEVICE_SIZE } from '../../constants';

export const HomePageContainer = styled.div`
    width: 327px;
    padding-top: 2.625rem;
    display: flex;
    flex-direction: column;
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
    justify-content: space-between;
    border: solid red;
`;

export const Title = styled.div`
    border: solid yellow;
    .heading {
        font-weight: 800;
        font-style: normal;

        font-size: 24px;
        line-height: 22px;
        letter-spacing: -0.75px;

        @media screen and (min-width: ${DEVICE_SIZE.md}) {
            border: solid red;
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
    border: solid purple;
    align-items: center;
`;

export const ListInvoiceContainer = styled.div`
    padding-top: 4rem;
    height: 100%;
    border: solid red;

    /* Adiciona espaçamento vertical entre os itens
    o seletor > * + * seleciona todos os elementos filhos diretos (*) que são precedidos por outro elemento (+) dentro do componente */
    > * + * {
        margin-top: 1rem;
    }
`;
