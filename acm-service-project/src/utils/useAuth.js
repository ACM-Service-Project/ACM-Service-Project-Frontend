import { useState } from 'react';


export function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem('user').active || false
    );

    const login = (user) => {
        localStorage.setItem('auth', user);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('user');
        setIsAuthenticated(false);
    };

    return {
        isAuthenticated,
        login,
        logout,
    };
};


