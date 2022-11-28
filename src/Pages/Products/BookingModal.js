import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { RootContext } from '../../context/RootContext';
import {toast} from 'react-hot-toast'
import { useQuery } from '@tanstack/react-query';
function BookingModal({Data}) {
  const  {user,HOST,SetReload,reload} = useContext(RootContext)
  const url = `${HOST}/booking`
  const {handleSubmit  , register , reset} = useForm()
  const Submit =(data)=>{
  const bookingData =   {...data , product_id:Data._id , product_Name:Data.product_name}    
  axios.post(url ,{bookingData}).then((res)=>{
    toast.success('Booking successfully registered !!')
    document.getElementById('booking-modal').checked = false;
    reset()
    SetReload(!reload)
  })

  }
  return (
    <>
{Data? <>
<input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-center text-lg">Booking for <span className=' text-orange-600'> {Data.product_name} </span> </h3>
    <form className="w-[450px] mx-auto" >
          
          <label className="block mt-5 ">
            <span className="block text-sm font-medium text-slate-700">Name </span>
            <input {...register('name')} defaultValue={user?.displayName} type="text"  readOnly className="mt-1 input-sm  block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500"/>
          </label> 
          <label className="block mt-2 ">
            <span className="block text-sm font-medium text-slate-700"> Email </span>
            <input {...register('email')} value={user?.email} type="text"  readOnly className="mt-1 input-sm  block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500"/>
          </label>
          <label className="block mt-2 ">
            <span className="block text-sm font-medium text-slate-700"> Phone </span>
            <input {...register('phone')} placeholder="your phone number" type="number"  className="mt-1 input-sm  block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500"/>
          </label> 
          <label className="block mt-2 ">
            <span className="block text-sm font-medium text-slate-700"> Location </span>
            <input {...register('location')}  type="text"  className="mt-1 input-sm  block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500"/>
          </label>
        
        </form>
    <div className="modal-action">
      <label htmlFor="booking-modal" className="btn btn-error text-white">cancle</label>
      <label  className="btn btn-primary" onClick={handleSubmit(Submit)}>BOOK NOW</label>
    </div>
  </div>
</div>
</> : ""}
    </>
  );
}

export default BookingModal;