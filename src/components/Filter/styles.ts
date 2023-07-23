import styled from 'styled-components';
import { DEVICE_SIZE } from '../../constants';

export const FilterContainer = styled.div`
    width: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: ${DEVICE_SIZE.md}) {
        width: 150px;
    }
    @media screen and (min-width: ${DEVICE_SIZE.lg}) {
        width: 150px;
    }

    /* border: solid green; */
`;
