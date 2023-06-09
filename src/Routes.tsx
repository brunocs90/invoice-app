import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { InvoiceDetails } from './pages/InvoiceDetails';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/invoice" element={<InvoiceDetails />} />
        </Routes>
    );
}
