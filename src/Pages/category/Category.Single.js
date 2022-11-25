import React, { useContext, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { RootContext } from "../../context/RootContext";
import ProductCard from "../Products/ProductCard";
import {useQuery} from '@tanstack/react-query'
import axios from "axios";
function CategorySingle(props) {
  const { categories,HOST } = useContext(RootContext);
  const params = useParams()
  const ID = params.ID
  const url = `${HOST}/products/${ID}`
  const {data:products=[], isLoading, refetch} = useQuery({
        queryKey : ['products'],
        queryFn: ()=> axios.get(url)
  })
  useEffect(()=>{
    refetch()

  },[ID])
  return (
    <div> {console.log(products)}
      <div className="drawer drawer-mobile">
        <input id="mobileMenu" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content grid grid-cols-3 gap-6 px-10 mt-20 h-auto min-h-screen">
         {products?.data?.map(item=>{ return (

              <ProductCard key={item._id} Data={item} > </ProductCard>

         )})}
        
         
        </div>

        <div className="drawer-side">
          <label htmlFor="mobileMenu" className="drawer-overlay"></label>
          <ul className="menu p-7 w-80 bg-gray-100 text-base-content">
            {categories?.map((item) => {
              return (
                <li key={item._id}>
                  <Link to={`/category/${item._id}`}>
                    <img className="h-[30px]" src={item.photoURL} alt="" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CategorySingle;
