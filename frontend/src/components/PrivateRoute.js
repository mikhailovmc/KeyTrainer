import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from "./../context/AuthProvider";

const PrivateRoute = () => {
    const { auth } = useContext(AuthContext);
    const { loading } = auth
    console.log(auth.data)
    console.log(loading)

    if (loading) {
        return (<p>Loading...</p>)
    }

    return auth.data ? <Outlet /> : <Navigate to="/login" />
};

export default PrivateRoute;