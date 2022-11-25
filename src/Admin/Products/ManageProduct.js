import React, { useContext, useState } from 'react';
import {useQuery} from '@tanstack/react-query'
import axios from 'axios';
import { RootContext } from '../../context/RootContext';
function ManageProduct(props) {
  const [deleteProduct,setDeleteProduct] = useState()
  const {HOST} = useContext(RootContext)
 
  const {data:products =[]  , refetch} = useQuery({
      queryKey:['products'],
      queryFn: ()=> axios.get(`${HOST}/products`)
  })
  const handleDelete =()=>{

   const url=`${HOST}/product/${deleteProduct}`
   console.log( url)
    axios.delete(url).then(res=>{
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
            <td> <label htmlFor="DeleteModal" onClick={()=>setDeleteProduct(item._id)} className=" btn btn-xs btn-error text-white">delete</label> </td>
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