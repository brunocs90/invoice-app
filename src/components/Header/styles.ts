import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 2.25rem;
    /* border: solid blue; */

    @media (max-width: 768px) {
        /* border: solid white; */
    }

    @media (max-width: 655px) {
        /* border: solid white; */
    }
`;
