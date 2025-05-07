import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyles from '@components/GlobalStyles/index.jsx';
import { RouterProvider as Router } from 'react-router';
import router from './routes';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GlobalStyles>
            <Router router={router} />
        </GlobalStyles>
    </StrictMode>,
);
