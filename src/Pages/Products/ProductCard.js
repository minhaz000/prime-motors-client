


function ProductCard({Data,setProductDetails}) {
 
  const condition = JSON.parse(Data.condition)
 const rating = []
 for(let i = 0; i <condition ; i++){ rating.push(i)}

  return (
    <div> 
      <div className="card card-compact  bg-base-100 shadow-xl">
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
          <div className="card-actions justify-end">
            {Data.booked===true? <button className="btn btn-primary" disabled> Booked  </button> : 
          <label onClick={()=>setProductDetails(Data)} htmlFor="booking-modal" className="btn btn-primary">BOOK</label>

            }
          </div>
        </div>
      </div>








    </div>
  );
}

export default ProductCard;