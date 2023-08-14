import { format } from 'date-fns';
import { Invoice } from '../Interfaces/Invoice';

import { Amount, ClientName, DueDate, InvoiceID, Wrapper } from './styles';

export function InvoiceItem({ clientName, description, id, paymentDue, status, total }: Invoice) {
    const formattedDate = formatDate(paymentDue);
    const formattedTotal = formatPrice(total);

    function formatDate(date: string) {
        const dueDate = new Date(date);
        return format(dueDate, "'Due' d MMM yyyy");
    }

    function formatPrice(amount: number) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'GBP',
        }).format(amount);
    }

    return (
        <Wrapper to={id} aria-label={`${description} - ${clientName} - View Invoice`}>
            <InvoiceID>{id}</InvoiceID>
            <DueDate>{formattedDate}</DueDate>
            <ClientName>{clientName}</ClientName>
            <Amount>{formattedTotal}</Amount>
            <div>Teste</div>
        </Wrapper>
    );
}
