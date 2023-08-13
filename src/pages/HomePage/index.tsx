import { useEffect, useState } from 'react';
import iconPlus from '../../assets/icon-plus.svg';
import { Button } from '../../components/Button';
import { Filter } from '../../components/Filter';
import { InvoiceItem } from '../../components/InvoiceItem';
import { DEVICE_SIZE } from '../../constants';
import LayoutDefault from '../layout';
import { HomeHeader, HomePageContainer, ItemsAction, ListInvoiceContainer, Title } from './styles';

interface Invoice {
    id: string;
    status: string;
    // ... outras propriedades da fatura
}

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
        // Simula carregamento de faturas (use sua lógica real aqui)
        const fetchInvoiceItems = async () => {
            // Simula carregamento de faturas
            const fetchedItems: Invoice[] = [
                { id: 'RT3080', status: 'Paid' },
                { id: 'XM9141', status: 'Pending' },
                { id: 'RG0314', status: 'Paid' },
                { id: 'RT2080', status: 'Pending' },
                { id: 'AA1449', status: 'Pending' },
                { id: 'TY9141', status: 'Pending' },
                { id: 'FV2353', status: 'Draft' },
            ];
            setInvoiceItems(fetchedItems);
        };

        fetchInvoiceItems();
    }, []);

    const handleFilterChange = (selectedOptions: string[]) => {
        setFilteredOptions(selectedOptions);
    };

    const handleClick = () => {
        console.log('Botão clicado!');
    };

    const filteredInvoiceItems =
        filteredOptions.length === 0
            ? invoiceItems
            : invoiceItems.filter(item => filteredOptions.includes(item.status));

    return (
        <LayoutDefault>
            <HomePageContainer>
                <HomeHeader>
                    <Title>
                        <div className="heading">Invoices</div>
                        <div className="invoicesCount">{isMobile ? '7 invoices' : 'There are 7 total invoices'}</div>
                    </Title>
                    <ItemsAction>
                        <div className="container-filter">
                            <Filter options={initialFilterOptions} onFilterChange={handleFilterChange} />
                        </div>
                        <Button icon={iconPlus} text={isMobile ? 'New' : 'New Invoice'} onClick={handleClick} />
                    </ItemsAction>
                </HomeHeader>
                <ListInvoiceContainer>
                    {filteredInvoiceItems.map(item => (
                        <InvoiceItem key={item.id} id={item.id} status={item.status} />
                    ))}
                </ListInvoiceContainer>
            </HomePageContainer>
        </LayoutDefault>
    );
}
