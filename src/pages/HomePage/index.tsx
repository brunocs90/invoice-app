import iconPlus from '../../assets/icon-plus.svg';
import { Button } from '../../components/Button';
import { Filter } from '../../components/Filter';
import LayoutDefault from '../layout';
import { HomeHeader, HomePageContainer, ItemsAction, Title } from './styles';

export function HomePage() {
    const handleClick = () => {
        console.log('Botão clicado!');
    };

    return (
        <LayoutDefault>
            <HomePageContainer>
                <HomeHeader>
                    <Title>
                        <div className="heading">Invoices</div>
                        <div className="invoicesCount">There are 7 total invoices</div>
                    </Title>
                    <ItemsAction>
                        <Filter />
                        <Button icon={iconPlus} text={'New Invoice'} onClick={handleClick} />
                    </ItemsAction>
                </HomeHeader>
            </HomePageContainer>
        </LayoutDefault>
    );
}
