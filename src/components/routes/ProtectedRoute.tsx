import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useRouter } from 'next/router';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { user } = useAuth();
    const router = useRouter();

    React.useEffect(() => {
        if (!user) {
            router.push('/login');
        }
    }, [user, router]);

    if (!user) return null;

    return <>{children}</>;
};

export default ProtectedRoute;