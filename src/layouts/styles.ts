import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    border: solid green;
`;

export const ContentContainer = styled.div`
    border: solid yellow;
    flex-grow: 1;
    padding: 2rem;
    @media screen and (min-width: 1200px) {
        width: calc(100% - 6.4375rem);
        margin-left: 6.4375rem;
    }
`;
