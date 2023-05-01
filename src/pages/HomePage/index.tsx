import LayoutDefault from '../layout';
import { HomeHeader, HomePageContainer } from './styles';

export function HomePage() {
    return (
        <LayoutDefault>
            <HomePageContainer>
                <HomeHeader>
                    <div className="heading">Invoices</div>
                    <div className="invoicesCount">There are 7 total invoices</div>
                </HomeHeader>
            </HomePageContainer>
        </LayoutDefault>
    );
}
