import React, { useContext, useEffect, useState } from "react";
import { Link,  useParams } from "react-router-dom";
import { RootContext } from "../../context/RootContext";
import ProductCard from "../Products/ProductCard";
import {useQuery} from '@tanstack/react-query'
import axios from "axios";
import BookingModal from "../Products/BookingModal";
function CategorySingle(props) {
  const { categories,HOST, reload } = useContext(RootContext);
  const [productDetails , setProductDetails] = useState()
  const params = useParams()
  const ID = params.ID
  const url = `${HOST}/products/${ID}`
 
  const {data:products=[], refetch} = useQuery({
        queryKey : ['products'],
        queryFn: ()=> axios.get(url)
  })
  useEffect(()=>{
    refetch()

  },[ID,reload])
  return (
    <div>   
      <div className="drawer drawer-mobile h-auto py-20 min-h-screen">
        <input id="mobileMenu" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 ">
         {products?.data?.map(item=>{ return (

              <ProductCard key={item._id} setProductDetails={setProductDetails} Data={item} > </ProductCard>

         )})}
        
        <BookingModal Data={productDetails}></BookingModal>
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
