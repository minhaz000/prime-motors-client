

import { Link, useLocation } from 'react-router-dom'
import Badge from '../../imgs/correct.png'
function ProductCard({Data,setProductDetails}) {

 const location = useLocation()
 const condition = JSON.parse(Data.condition)
 const rating = []
 for(let i = 0; i <condition ; i++){ rating.push(i)}

  return (
    <div> 
      <div className="card card-compact  bg-base-100 shadow-xl h-[500px]">
          <figure><img src={Data.photo} className='h-[200px]' alt="Shoes" /></figure>
          
        <div className="card-body">
          <h2 className="card-title">{Data.product_name}</h2>
          <p> {Data.product_des.slice(0,100)}</p>

          <div className="rating">
           
          {rating.map((item,i)=>{return(
            <input key={i} type="text" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          )})

          }
          
          </div>
          <span className=" font-bold">Origilnal Price: ${Data.price}</span>
          <span className=" font-bold">Resell Price: ${Data.resale_price}</span>
          <div className="grid grid-cols-4 mt-0"> 
                        <img  className=" col-span-1 h-[40px] rounded-full row-span-2" src={Data.posted_by.photo} alt="" />
                        <span className=" col-span-3 ml-2 font-bold mb-[-2]">Posted By :</span>
                        <span className=" col-span-3 text-[16px] font-medium  ml-2 flex">{Data.posted_by.name}
                          {Data.posted_by?.verified? <img className='h-[20px]  ml-1' src={Badge} alt="" />:"" }
                        </span>
             </div>

          <div className="card-actions  justify-end">
          {location.pathname==='/'? <Link to={`/category/${Data.category}`} className="btn btn-primary" > Explore  </Link> :   
            Data.booked===true? <button className="btn btn-primary" disabled> Booked  </button> : 
          <label onClick={()=>setProductDetails(Data)} htmlFor="booking-modal" className="btn btn-primary">BOOK</label>
          } 
          </div>
        </div>
      </div>








    </div>
  );
}

export default ProductCard;