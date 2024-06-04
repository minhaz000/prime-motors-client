import React, { useContext, useState } from 'react';
import {useQuery} from '@tanstack/react-query'
import axios from 'axios';
import { RootContext } from '../../context/RootContext';
function ManageProduct(props) {
  const [selectProduct,setSelectProduct] = useState()
  const {HOST,user} = useContext(RootContext)
 const url = `${HOST}/products?email=${user?.email}`
  const {data:products =[]  , refetch} = useQuery({
      queryKey:['products'],
      queryFn: ()=> axios.get(url, { headers : {"authorization":`Bearar ${localStorage.getItem('access-token')}` }})
  })
  const handleDelete =()=>{

   const url=`${HOST}/product/${selectProduct}?email=${user?.email}`
    axios.delete(url ,{ headers : {"authorization":`Bearar ${localStorage.getItem('access-token')}` }}).then(res=>{
      refetch()
    })  
  }

  const handleAdvertise =(productID)=>{

    const url=`${HOST}/advertise/${productID}?email=${user?.email}`
    axios.post(url ,{},{ headers : {"authorization":`Bearar ${localStorage.getItem('access-token')}` }}).then(res=>{
      refetch()
    })

  }
  return (
    <div> 
      <div className="">
  <table className="table table-zebra w-full">
   
    <thead>
      <tr>
        <th>NO</th>
        <th>Name</th>
        <th>posted by</th>
        <th>conditon</th>
        <th>report status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody> 
      {products?.data?.map((item,i)=>{return(
            <tr key={i}>
            <th>{i+1}</th>
            <td>{item.product_name}</td>
            <td>{item.posted_by.name}</td>
            <td>{item.condition}</td>
            <td>{item.report?<span className='text-red-600'>YES</span>:<span className='text-green-600'>NO</span>}</td>
            <td>{ item.advertise?<button  className=" btn btn-xs btn-info text-white mr-2" disabled>Advertise</button> : 
          <button onClick={()=>handleAdvertise(item._id)} className=" btn btn-xs btn-info text-white mr-2">Advertise</button>
          
          }
               <label htmlFor="DeleteModal" onClick={()=>setSelectProduct(item._id)} className=" btn btn-xs btn-error text-white">delete</label>
            </td>
          </tr>
      )})}     
    </tbody>
  </table>
</div>


<input type="checkbox" id="DeleteModal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Are you Sure ? You want to DELETE this product</h3>
    <div className="modal-action">
      <label htmlFor="DeleteModal" className="btn btn-sm btn-success text-white">NO </label>
      <label htmlFor="DeleteModal"  onClick={handleDelete} className="btn btn-sm btn-error text-white">yes </label>
    </div>
  </div>
</div>
    </div>
  );
}

export default ManageProduct;