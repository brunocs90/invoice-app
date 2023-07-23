import styled from 'styled-components';

export const InvoiceItemContainer = styled.div`
    display: flex;
    /* border: solid blue; */
    width: 100%;
    height: 72px;
    background-color: ${({ theme }) => theme.invoiceItem.bg};
`;
