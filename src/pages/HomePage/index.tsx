import { useEffect, useState } from 'react';
import iconPlus from '../../assets/icon-plus.svg';
import { Button } from '../../components/Button';
import { Filter } from '../../components/Filter';
import { InvoiceItem } from '../../components/InvoiceItem';
import { DEVICE_SIZE } from '../../constants';
import LayoutDefault from '../layout';
import { HomeHeader, HomePageContainer, ItemsAction, ListInvoiceContainer, Title } from './styles';

export function HomePage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < parseInt(DEVICE_SIZE.md));

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < parseInt(DEVICE_SIZE.md));
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleClick = () => {
        console.log('Botão clicado!');
    };

    return (
        <LayoutDefault>
            <HomePageContainer>
                <HomeHeader>
                    <Title>
                        <div className="heading">Invoices</div>
                        <div className="invoicesCount">{isMobile ? '7 invoices' : 'There are 7 total invoices'}</div>
                    </Title>
                    <ItemsAction>
                        <Filter />
                        <Button icon={iconPlus} text={isMobile ? 'New' : 'New Invoices'} onClick={handleClick} />
                    </ItemsAction>
                </HomeHeader>
                <ListInvoiceContainer>
                    <InvoiceItem />
                    <InvoiceItem />
                    <InvoiceItem />
                    <InvoiceItem />
                    <InvoiceItem />
                    <InvoiceItem />
                    <InvoiceItem />
                </ListInvoiceContainer>
            </HomePageContainer>
        </LayoutDefault>
    );
}
