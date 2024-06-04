import React, { useContext } from 'react';
import { RootContext } from './context/RootContext';
import {RouterProvider} from "react-router-dom";
import router from './Routes/Routes';
import { Toaster } from 'react-hot-toast'
import './css/index.css'
function App(props) {
      const {user} = useContext(RootContext)

  

  return (
    <div className=' '>
       

    <RouterProvider router={router} />    
    <Toaster /> 
    </div>
  );
}

export default App;