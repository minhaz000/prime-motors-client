import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { RootContext } from '../../context/RootContext';

function ShowBooking(props) {
const {user , HOST} = useContext(RootContext)
const url = `${HOST}/booking?email=${user?.email}` 
const {data:bookings= [] } = useQuery({
  queryKey : ['bookings'],
  queryFn : ()=> axios.get(url ,{headers:{"authorization":`Bearar ${localStorage.getItem('access-token')}`
  }})
})

  return (
    <div className=' px-10 my-20 '>
       <table className="table table-zebra w-full shadow-md ">  
   <thead>
     <tr>
       <th>NO</th>
       <th>Product Name</th>
       <th>location</th>
       <th>phone</th>
       <th>Actions</th>
     </tr>
   </thead>
   <tbody> 
     {bookings?.data?.map((item,i)=>{return(
           <tr key={i}>
           <th>{i+1}</th>
           <td>{item.product_Name}</td>
           <td>{item.location}</td>
           <td>{item.phone}</td>
           
           <td> <label htmlFor="DeleteModal"  className=" btn btn-xs btn-info text-white">pay</label> </td>
         </tr>
     )})}     
   </tbody>
 </table>
    </div>
  );
}

export default ShowBooking;