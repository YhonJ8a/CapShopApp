import type { AppProps } from 'next/app';
import { AuthProvider } from '../contexts/AuthContext';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-purple/theme.css";
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import '../assets/styles/App.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <PrimeReactProvider>
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </PrimeReactProvider>
    );
}

export default MyApp;