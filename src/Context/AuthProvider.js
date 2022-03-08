import React from 'react';
import useFirebase from '../Hooks/useFirebase';
import AuthContext from './authContext';


const AuthProvider = ({ children }) => {
    const allContexts = useFirebase();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;