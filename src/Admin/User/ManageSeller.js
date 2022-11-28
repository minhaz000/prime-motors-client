import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { RootContext } from '../../context/RootContext';

function ManageSeller(props) {
  const {user,HOST} = useContext(RootContext)
  const [deleteSeller,setDeleteSeller] = useState()
  const url = `${HOST}/sellers?email=${user?.email}`
  const {data:sellers=[],refetch } =  useQuery({
    queryKey:['sellers'],
    queryFn : ()=> axios.get(url,{ headers : {"authorization":`Bearar ${localStorage.getItem('access-token')}` }})
  })
  const handleVerify = (verifyID)=>{
    const url = `${HOST}/verify-user/${verifyID}?email=${user?.email}`
    axios.post(url,{},{ headers : {"authorization":`Bearar ${localStorage.getItem('access-token')}`}}).then(res=>{
      refetch()
    })

   } 
  const handleDelete =()=>{
    const url=`${HOST}/user/${deleteSeller}?email=${user?.email}`
    console.log( url)
     axios.delete(url ,{ headers : {"authorization":`Bearar ${localStorage.getItem('access-token')}` }}).then(res=>{
       refetch()
     }) }
  return (
    <div> 
    <div className="px-5 mt-20">
  <table className="table table-zebra w-full shadow-xl">
   
    <thead>
      <tr>
        <th></th>
        <th>Seller's Name</th>
        <th>Seller's Email</th>
        <th>Seller's Photo</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
     {sellers?.data?.map((item,i)=> { return ( 
          <tr key={i}>
          <th>{i+1}</th>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td><img className=' rounded-full h-[40px]' src={item.photo} alt="" /></td>
          <td>{item.verified? <button  className='btn btn-xs btn-info text-white mr-2' disabled>verified</button> : 
            <button onClick={()=>handleVerify(item._id)} className='btn btn-xs btn-info text-white mr-2'> Verify</button>
            
            }
            <label htmlFor='DeleteModal' onClick={()=>setDeleteSeller(item._id)} className='btn btn-xs btn-error text-white'> delete</label>
          </td>
        </tr>
     )})}
      
     
     
    </tbody>
  </table>
</div>
<input type="checkbox" id="DeleteModal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Are you Sure ? You want to DELETE this Seller</h3>
    <div className="modal-action">
      <label htmlFor="DeleteModal" className="btn btn-sm btn-success text-white">NO </label>
      <label htmlFor="DeleteModal"  onClick={handleDelete} className="btn btn-sm btn-error text-white">yes </label>
    </div>
  </div>
</div>
    </div>
  );
}

export default ManageSeller;