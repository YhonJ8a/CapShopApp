import type { AppProps } from 'next/app';
import { AuthProvider } from '../contexts/AuthContext';
import '../assets/styles/App.css';
import '../assets/styles/Footer.css';
import '../assets/styles/Login.css';
import '../assets/styles/Navbar.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    );
}

export default MyApp;