import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HomePage: React.FC = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/login');
    }, [router]);

    return null;
};

export default HomePage;