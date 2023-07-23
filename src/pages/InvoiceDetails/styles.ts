import styled from 'styled-components';
import { DEVICE_SIZE } from '../../constants';

export const InvoiceContainer = styled.div`
    width: 327px;
    display: flex;
    justify-content: center;
    /* border: solid white; */

    @media screen and (min-width: ${DEVICE_SIZE.md}) {
        width: 672px;
    }
    @media screen and (min-width: ${DEVICE_SIZE.lg}) {
        width: 730px;
    }
`;
