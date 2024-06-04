import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { RootContext } from "../../context/RootContext";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Profile(props) {
  const { user, HOST } = useContext(RootContext);
  const { register, handleSubmit, reset } = useForm();
  const url = `${HOST}/get-user-role?email=${user?.email}`;
  // const { data: dbuser = [], refetch } = useQuery({
  //   queryKey: ["sellers"],
  //   queryFn: () => axios.get(url, { headers: { authorization: `Bearar ${localStorage.getItem("access-token")}` } }),
  // });

  const Submit = (data) => {
    axios
      .put(`${HOST}/user`, data, { headers: { authorization: `Bearar ${localStorage.getItem("access-token")}` } })
      .then((res) => {
        toast.success("successfully updated !!!");
        reset(data);
      });
  };
  useEffect(() => {
    axios.get(url, { headers: { authorization: `Bearar ${localStorage.getItem("access-token")}` } }).then((res) => {
      reset(res.data);
    });
  }, []);
  return (
    <div>
      <h1 className="mt-10 text-center uppercase text-3xl"> Profile </h1>
      <form className=" mx-auto my-10  w-4/5" onSubmit={handleSubmit(Submit)}>
        <label className="block ">
          <span className="block text-sm font-medium text-slate-700"> Name</span>
          <input
            {...register("name")}
            type="text"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
   
  "
          />
        </label>
        <label className="block mt-2">
          <span className="block text-sm font-medium text-slate-700">Email</span>
          <input
            {...register("email")}
            type="text"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
   
  "
          />
        </label>
        <label className="block mt-2">
          <span className="block text-sm font-medium text-slate-700">Role</span>
          <input
            {...register("role")}
            type="text"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-green-500
   
  "
          />
        </label>

        <button className="btn btn-success w-full mt-10 text-white"> Add product </button>
      </form>
    </div>
  );
}

export default Profile;
