import React, { useContext } from 'react'
import { AuthContext } from './../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    console.log(location)
    if (loading) {
        return <h3>Loading...</h3>
    }

    if (user?.email) {
        return children;
    }
    return <Navigate state={location?.pathname} to="/login"></Navigate>
}

export default PrivateRoute