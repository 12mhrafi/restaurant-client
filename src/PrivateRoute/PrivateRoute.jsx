import React, { useContext } from 'react'
import { AuthContext } from './../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'flowbite-react';
const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    console.log(location)
    if (loading) {
        return <div>
             <Spinner aria-label="Extra large spinner example" size="xl" />
        </div>
    }

    if (user?.email) {
        return children;
    }
    return <Navigate state={location?.pathname} to="/login"></Navigate>
}

export default PrivateRoute