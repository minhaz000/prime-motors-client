import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { RootContext } from '../../context/RootContext';

function PrivateRoute({children}) {
  const {user,loading} = useContext(RootContext)
  const location = useLocation()
  if(loading){ return(
    <div className=' grid h-screen place-items-center'>  <div>
    <h1 className=' text-4xl font-bold text-center'>Loading</h1> 
      <progress className="progress  w-[50vw]"></progress> </div>
    </div>
 )} 
  if(user){ return children}

  return <Navigate to='/login' state={{form:location}} replace />

}

export default PrivateRoute;