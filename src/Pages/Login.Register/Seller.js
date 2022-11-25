import React from 'react';
import {Link} from 'react-router-dom'
import police from '../../imgs/Police car-pana.svg'
function Seller(props) {
  return (
    <div className='grid grid-cols-3 px-20 my-20'>
    <div> <img src={police} alt="" /></div>
    <div className=' col-span-2 mx-auto'> 
   < form className='  w-[450px]'>
<label className="block">
  <span className="block text-sm font-medium text-slate-700">First Name</span>
  <input  name='email' type="email"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
   
  "/>
</label> 
<label className="block">
  <span className="block text-sm font-medium text-slate-700">Last Name</span>
  <input  name='email' type="email"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
   
  "/>
</label> 
<label className="block">
  <span className="block text-sm font-medium text-slate-700">Displa Name</span>
  <input  name='email' type="email"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
   
  "/>
</label> 
<label className="block">
  <span className="block text-sm font-medium text-slate-700">Email</span>
  <input  name='email' type="email"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
   
  "/>
</label> 
 <label className="block  mt-5">
  <span className="block text-sm font-medium text-slate-700">Password</span>
  <input  name='password' type="text"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
  "/>
</label>
<label className="block  mt-5">
  <span className="block text-sm font-medium text-slate-700">Confirm Password</span>
  <input  name='password' type="text"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
  "/>
</label>
  <button  className='btn btn-success w-full mt-10 text-white'> Login </button>
   <p className='capitalize mt-5'> Already have an account ? <Link className='text-blue-400' to='/login'> LOGIN NOW </Link>  </p>
  <button className='btn btn-error w-full mt-5 text-white'><i className="fa-brands fa-google mr-4"></i> Continue With google  </button>
</form>
      
    </div>
    
  </div>
  );
}

export default Seller;