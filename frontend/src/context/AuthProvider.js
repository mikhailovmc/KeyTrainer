import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({loading: true, data: null, isAdmin: null});
    
    console.log(auth)
    const setAuthData = (data, status ) => {
        console.log("Эти данные приняты в метод", data)
        setAuth({
            ...auth,
            isAdmin: status === "admin" ? true : false,
            data: data
        });
        console.log("Это итоговые данные после обработки", auth)
    };

    // const setAuthIsAdmin = (status) => {
    //     if(status === "admin") setAuth({
    //         ...auth,
    //         isAdmin: true});
    // };

    useEffect(() => {
        setAuth({ loading: false, 
            // isAdmin: false,
            isAdmin: JSON.parse(window.localStorage.getItem('authIsAdmin')), 
            data: JSON.parse(window.localStorage.getItem('authData'))});
    }, []);

    useEffect(() => {
        window.localStorage.setItem('authData', JSON.stringify(auth.data));
      }, [auth.data]);

    useEffect(() => {
        window.localStorage.setItem('authIsAdmin', JSON.stringify(auth.isAdmin));
    }, [auth.isAdmin]);
    
    return (
        <AuthContext.Provider value={{ auth, setAuthData }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;