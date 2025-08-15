import React from 'react'
import { createContext, useContext, useState } from 'react'

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        if (username === 'admin' && password === '223344') {
            setUser({ username });
            return true;
        };
        return false;
    };

    const logout = () => {
        setUser(null);
    };
    
    const value = { user, login, logout };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
