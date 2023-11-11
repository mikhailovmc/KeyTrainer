import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({loading: true, data: null, isAdmin: false});

    const setAuthData = (data) => {
        setAuth({data: data});
    };

    useEffect(() => {
        setAuth({ loading: false, isAdmin: false, data: JSON.parse(window.localStorage.getItem('authData'))});
    }, []);

    useEffect(() => {
        window.localStorage.setItem('authData', JSON.stringify(auth.data));
      }, [auth.data]);

    return (
        <AuthContext.Provider value={{ auth, setAuthData }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;