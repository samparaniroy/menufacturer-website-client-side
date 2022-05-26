import React, { useState } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import{Navigate, useLocation} from 'react-router-dom'
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';


const RequireAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [admin] = useState(user);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if(!user || !admin){
        return <Navigate to='/login' state = {{from:location}} replace />
    }
    return children;
};

export default RequireAdmin;