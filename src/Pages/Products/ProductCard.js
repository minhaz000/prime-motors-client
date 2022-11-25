import React from 'react';

function ProductCard({Data}) {
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
          <figure><img src={Data.photo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{Data.product_name}</h2>
          <p> {Data.product_des}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;