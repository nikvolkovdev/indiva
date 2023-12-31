import { BrowserRouter } from 'react-router-dom';
import './app/styles/index.scss';
import { createRoot } from 'react-dom/client';
import App from '@/app/App';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';
import {ThemeProvider} from "@/app/ThemeProvider";

const container = document.getElementById('root');

const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
