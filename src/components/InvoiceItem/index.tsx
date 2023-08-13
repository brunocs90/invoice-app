import { InvoiceItemContainer } from './styles';

interface InvoiceItemProps {
    id: string;
    status: string;
    // ... outras propriedades e tipos
}

export function InvoiceItem({ id, status }: InvoiceItemProps) {
    // Use id e status normalmente no componente
    return (
        <InvoiceItemContainer>
            <div>
                {id}
                {status}
            </div>
        </InvoiceItemContainer>
    );
}
