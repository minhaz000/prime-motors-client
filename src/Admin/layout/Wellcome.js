import React, { useContext } from 'react';
import { RootContext } from '../../context/RootContext';

function Wellcome() {
  const {userRole} = useContext(RootContext)
  return (
    <div>   
      
      
      <div className=' mt-20 flex justify-center'> 
      <h1 className=' text-center text-3xl '> Wellcome , <span className=' font-medium text-orange-500 '> {userRole?.name}</span>  </h1>
      <p className=' text-center mb-4 ml-5 text-xl'> how are you ?</p>
       </div>
       <p className=' text-center mt-6 text-xl'> Your role is <span className=' text-blue-700 font-medium'> {userRole?.role}</span></p>
    </div>
  );
}

export default Wellcome;