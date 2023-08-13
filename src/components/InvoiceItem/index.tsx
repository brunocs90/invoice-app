import { Invoice } from '../Interfaces/Invoice';
import { InvoiceItemContainer } from './styles';

export function InvoiceItem({
    id,
    createdAt,
    paymentDue,
    description,
    paymentTerms,
    clientName,
    clientEmail,
    status,
    senderAddress,
    clientAddress,
    items,
    total,
}: Invoice) {
    return (
        <InvoiceItemContainer>
            <div className="id">{id}</div>
            <div className="createdAt">{createdAt}</div>
            <div className="paymentDue">{paymentDue}</div>
            <div className="description">{description}</div>
            <div className="paymentTerms">{paymentTerms}</div>
            <div className="clientName">{clientName}</div>
            <div className="clientEmail">{clientEmail}</div>
            <div className="status">{status}</div>
            <div className="senderAddress">
                {senderAddress.street}, {senderAddress.city}, {senderAddress.postCode}, {senderAddress.country}
            </div>
            <div className="clientAddress">
                {clientAddress.street}, {clientAddress.city}, {clientAddress.postCode}, {clientAddress.country}
            </div>
            <div className="items">
                {items.map((item, index) => (
                    <div key={index}>
                        Item {index + 1}: {item.name}, Quantity: {item.quantity}, Price: {item.price}, Total:{' '}
                        {item.total}
                    </div>
                ))}
            </div>
            <div className="total">{total}</div>
        </InvoiceItemContainer>
    );
}
