import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({loading: true, data: null, isAdmin: null, id: null});
    
    console.log(auth)
    const setAuthData = (data, status, id ) => {
        console.log("Эти данные приняты в метод", data)
        setAuth({
            ...auth,
            isAdmin: status === "admin" ? true : false,
            data: data,
            id: id
        });
        console.log("Это итоговые данные после обработки", auth)
    };


    useEffect(() => {
        setAuth({ 
            loading: false, 
            isAdmin: JSON.parse(window.localStorage.getItem('authIsAdmin')), 
            data: JSON.parse(window.localStorage.getItem('authData')),
            id: JSON.parse(window.localStorage.getItem('authId'))
        });
    }, []);

    useEffect(() => {
        window.localStorage.setItem('authData', JSON.stringify(auth.data));
      }, [auth.data]);

    useEffect(() => {
        window.localStorage.setItem('authIsAdmin', JSON.stringify(auth.isAdmin));
    }, [auth.isAdmin]);

    useEffect(() => {
        window.localStorage.setItem('authId', JSON.stringify(auth.id));
    }, [auth.id]);
    
    return (
        <AuthContext.Provider value={{ auth, setAuthData }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;