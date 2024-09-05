// src/contexts/AuthContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useRouter } from 'next/router';

interface AuthContextType {
    user: string | null;
    login: (username: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<string | null>(null);
    const router = useRouter();

    const login = (username: string) => {
        setUser(username);
        router.push('/home');
    };

    const logout = () => {
        setUser(null);
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
