import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { RootContext } from '../../context/RootContext';

function ManageBuyer(props) {
  const {user,HOST} = useContext(RootContext)
  const [deleteBuyer,setDeleteBuyer] = useState()
  const url =  `${HOST}/buyers?email=${user?.email}`
  const {data:buyers=[], refetch} = useQuery({ 
    queryKey : ['buyers'],
    queryFn: ()=> axios.get(url, { headers : {"authorization":`Bearar ${localStorage.getItem('access-token')}` }})
  })
  const handleDelete =()=>{

    const url=`${HOST}/user/${deleteBuyer}?email=${user?.email}`
     axios.delete(url ,{ headers : {"authorization":`Bearar ${localStorage.getItem('access-token')}` }}).then(res=>{
       refetch()
     })}
    
  return ( 
    <div> 
    <div className="px-5 mt-20">
  <table className="table table-zebra w-full shadow-xl">
   
    <thead>
      <tr>
        <th></th>
        <th>Buyer's Name</th>
        <th>Buyer's Email</th>
        <th>Buyer's IMG</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
     
    {buyers?.data?.map((item,i)=> { return ( 
          <tr key={i}>
          <th>{i+1}</th>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td><img className=' rounded-full h-[40px]' src={item.photo} alt="" /></td>
          <td> 
            <label htmlFor='DeleteModal' onClick={()=> setDeleteBuyer(item._id)} className='btn btn-xs btn-error text-white'> delete</label>
            </td>
        </tr>
     )})}
     
     
    </tbody>
  </table>
</div>

<input type="checkbox" id="DeleteModal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Are you Sure ? You want to DELETE this Buyer</h3>
    <div className="modal-action">
      <label htmlFor="DeleteModal"  className="btn btn-sm btn-success text-white">NO </label>
      <label htmlFor="DeleteModal"  onClick={handleDelete} className="btn btn-sm btn-error text-white">yes </label>
    </div>
  </div>
</div>
    </div>
  );
}

export default ManageBuyer;