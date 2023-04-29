import styled from 'styled-components';

export const HomePageContainer = styled.div`
    border: solid red;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 2rem;
    width: 100%;
    @media screen and (min-width: 1200px) {
        width: calc(100% - 6.4375rem);
        margin-left: 6.4375rem;
    }
`;
