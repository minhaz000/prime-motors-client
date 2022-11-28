import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import {useForm} from 'react-hook-form'
import { RootContext } from "../../context/RootContext";
import police from "../../imgs/Police car-pana.svg";
import axios from "axios";
function Login(props) {
  const { GoogleLogIN,LogIn,HOST } = useContext(RootContext);
  const {register , handleSubmit} = useForm()
  const location = useLocation()
  const from = location.state?.form?.pathname || '/'
  const navigate = useNavigate()

const Submit =(data)=>{
  LogIn(data.email,data.password).then(res=>{
    toast.success("Successfully Logged In !!!")
    navigate(from , {replace:true})
    const user = {email:res.user.email, name:res.user.displayName, photo:res.user.photoURL ,uid:res.user.uid}
    axios.post(`${HOST}/get-token`,{user}).then(res=>{
      console.log( res)
      localStorage.setItem('access-token',res.data.token)
    })
  })
  .catch(err=> toast.error(err.code))
}

const handleGoogleLogin = (e) => {
  e.preventDefault();
  GoogleLogIN().then((res) => {
    toast.success("Successfully Logged In !!!")
    navigate(from ,{replace:true})
    const user = {email:res.user.email, name:res.user.displayName, photo:res.user.photoURL ,uid:res.user.uid}
    axios.post(`${HOST}/get-token`,{user}).then(res=>{
      console.log( res)
      localStorage.setItem('access-token',res.data.token)
    })
    
  })
  .catch(err=> toast.error(err.code))
}
  return (
    <div className="grid grid-cols-3 px-20 my-20">
      <div>
     
        <img src={police} alt="" />
      </div>
      <div className=" col-span-2 mx-auto">
        <form className="  w-[450px]" onSubmit={handleSubmit(Submit)}>
          
          <label className="block">
            <span className="block text-sm font-medium text-slate-700"> Email</span>
            <input {...register('email')}  type="email" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400   focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500"/>
          </label>

          <label className="block  mt-5">
            <span className="block text-sm font-medium text-slate-700"> Password </span>
            <input {...register('password')} type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500"/>
          </label>

          <button className="btn btn-success w-full mt-10 text-white"> Login</button>

          <p className="capitalize mt-5"> dont have an acount ? <Link className="text-blue-400" to="/register"> Resiter NOW</Link></p>
         
          <button onClick={handleGoogleLogin} className="btn btn-error w-full mt-5 text-white">
            <i className="fa-brands fa-google mr-4"></i> Continue With google
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login;
