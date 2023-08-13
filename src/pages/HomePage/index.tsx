import { useEffect, useState } from 'react';
import iconPlus from '../../assets/icon-plus.svg';
import { Button } from '../../components/Button';
import { Filter } from '../../components/Filter';
import { InvoiceItem } from '../../components/InvoiceItem';
import { DEVICE_SIZE } from '../../constants';
import LayoutDefault from '../layout';
import { HomeHeader, HomePageContainer, ItemsAction, ListInvoiceContainer, Title } from './styles';

interface Invoice {
    id: number;
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
                { id: 1, status: 'Draft' },
                { id: 2, status: 'Pending' },
                { id: 3, status: 'Paid' },
                { id: 4, status: 'Draft' },
                { id: 5, status: 'Paid' },
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
