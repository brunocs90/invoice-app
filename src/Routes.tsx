import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { InvoiceDetailsPage } from './pages/InvoiceDetailsPage';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/invoice" element={<InvoiceDetailsPage />} />
        </Routes>
    );
}
