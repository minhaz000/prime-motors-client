import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { RootContext } from '../../context/RootContext';
import ProductCard from '../Products/ProductCard';

function Advertise(props) {
  const {HOST} = useContext(RootContext)
  const url = `${HOST}/advertise` 
  const {data:advertise=[]} = useQuery({
    queryKey:['advertise'],
    queryFn: ()=> axios.get(url)
  }) 
  console.log(advertise)
 if (advertise.data?.length) {return ( 
    <div className=' bg-gray-100  py-10'>  
    <h1 className='text-center uppercase text-2xl font-medium text-blue-500'> Our Hot <span className=' text-orange-500'>products</span> </h1>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 mt-20 '>
         { advertise?.data.map(item=>{return( 
          <ProductCard key={item._id} Data={item}> </ProductCard> 
         )})}
      </div>
    </div>
  );}

}

export default Advertise;