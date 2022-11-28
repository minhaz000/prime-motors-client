import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { RootContext } from '../../context/RootContext';

function AddProducts(props) {
const {userRole,HOST,categories} = useContext(RootContext)
const {register , handleSubmit , reset}  = useForm()
const Submit =(data)=>{
 const uploadURL=`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG_API_KEY}`
  console.log(data)
const photo = data.photo[0] 

const formData = new FormData()
formData.append('image',photo )
axios.post(uploadURL,formData).then(res=>{
    data.photo = res.data.data.display_url
    const product = {...data , posted_by:{...userRole}}
            axios.post(`${HOST}/product`,{product:product}).then(res=>{
              toast.success( ' product successfully added !!!')
              reset()
            })
})


  


}
  return (
    <div>
      <h1 className='mt-10 text-center uppercase text-3xl'> Add Product</h1>
      < form className=' mx-auto my-10  w-4/5' onSubmit={handleSubmit(Submit)}>
<label className="block ">
  <span className="block text-sm font-medium text-slate-700">Product Name</span>
  <input  {...register('product_name')} type="text"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
   
  "/>
</label> 
<label className="block mt-2">
  <span className="block text-sm font-medium text-slate-700">Product Description</span>
  <input  {...register('product_des')} type="text"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
   
  "/>
</label> 
<label className="block mt-2">
  <span className="block text-sm font-medium text-slate-700">Original Price</span>
  <input {...register('price')}  type="number"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
   
  "/>
</label> 
<label className="block mt-2">
  <span className="block text-sm font-medium text-slate-700">Resale Price</span>
  <input  {...register('resale_price')}  type="number"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
   
  "/>
</label> 
 <label className="block  mt-2">
  <span className="block text-sm font-medium text-slate-700">Years of Use</span>
  <input {...register('used_year')}  type="number"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
  "/>
</label>
 <label className="block  mt-2">
  <span className="block text-sm font-medium text-slate-700">Category</span>
  <select {...register('category')}  className="select mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500">
 {categories?.map((item,i)=> { return(
  <option key={i} value={item._id} >{item.name}</option>

 )})

 }
 
</select>
</label> 
<label className="block  mt-2">
  <span className="block text-sm font-medium text-slate-700">Condition </span>
  <select {...register('condition')}  className="select mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500">
  <option value={2} >Poor</option>
  <option  value={3} >Fair</option>
  <option value={4} >Good</option>
  <option value={4.5}>As New</option>
</select>
</label>
 <label className="block  mt-2">
  <span className="block text-sm font-medium text-slate-700">Location</span>
  <input  {...register('location')}  type="text"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
  "/>
</label>
<label className="block  mt-2">
  <span className="block text-sm font-medium text-slate-700">Picture </span>
  <input {...register('photo')} type="file"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
  "/>
</label>
  <button  className='btn btn-success w-full mt-10 text-white'> Add product </button>
</form>

    </div>
  );
}
export default AddProducts;