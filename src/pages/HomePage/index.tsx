import { useEffect, useState } from 'react';
import iconPlus from '../../assets/icon-plus.svg';
import { Button } from '../../components/Button';
import { Filter } from '../../components/Filter';
import { Invoice } from '../../components/Interfaces/Invoice';
import { InvoiceItem } from '../../components/InvoiceItem';
import { DEVICE_SIZE } from '../../constants';
import dataJson from '../../data.json';
import LayoutDefault from '../layout';
import { HomeHeader, HomePageContainer, ItemsAction, ListInvoiceContainer, Title } from './styles';

const initialFilterOptions = ['Draft', 'Pending', 'Paid'];

export function HomePage() {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < parseInt(DEVICE_SIZE.md));
    const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
    const [invoiceItems, setInvoiceItems] = useState<Invoice[]>([]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < parseInt(DEVICE_SIZE.md));
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const fetchInvoiceItems = async () => {
            try {
                setInvoiceItems(dataJson);
                setFilteredOptions(initialFilterOptions);
            } catch (error) {
                console.error('Error loading invoices:', error);
            }
        };

        fetchInvoiceItems();
    }, []);

    const handleFilterChange = (selectedOptions: string[]) => {
        setFilteredOptions(selectedOptions);
    };

    const filteredInvoiceItems =
        filteredOptions.length === 0 ? [] : invoiceItems.filter(item => filteredOptions.includes(item.status));

    const invoiceCount = filteredInvoiceItems.length;

    const handleClick = () => {
        console.log('Button clicked!');
    };

    return (
        <LayoutDefault>
            <HomePageContainer>
                <HomeHeader>
                    <Title>
                        <div className="heading">Invoices</div>
                        <div className="invoicesCount">
                            {isMobile ? `${invoiceCount} invoices` : `There are ${invoiceCount} total invoices`}
                        </div>
                    </Title>
                    <ItemsAction>
                        <div className="container-filter">
                            <Filter options={initialFilterOptions} onFilterChange={handleFilterChange} />
                        </div>
                        <Button icon={iconPlus} text={isMobile ? 'New' : 'New Invoice'} onClick={handleClick} />
                    </ItemsAction>
                </HomeHeader>
                <ListInvoiceContainer>
                    {filteredInvoiceItems.length === 0 ? (
                        <div className="empty-message">No invoices found.</div>
                    ) : (
                        filteredInvoiceItems.map(item => (
                            <InvoiceItem
                                key={item.id}
                                id={item.id}
                                createdAt={item.createdAt}
                                paymentDue={item.paymentDue}
                                description={item.description}
                                paymentTerms={item.paymentTerms}
                                clientName={item.clientName}
                                clientEmail={item.clientEmail}
                                status={item.status}
                                senderAddress={item.senderAddress}
                                clientAddress={item.clientAddress}
                                items={item.items}
                                total={item.total}
                            />
                        ))
                    )}
                </ListInvoiceContainer>
            </HomePageContainer>
        </LayoutDefault>
    );
}
