import React from 'react';
import {Link} from 'react-router-dom';
function Categories({Data}) {
  

  return (
    <Link to={`category/${Data._id}`} className='cursor-pointer' >
      <div className="card   p-6  bg-white">
  <figure><img src={Data.photoURL} className="h-[60px]" alt="Shoes" /></figure>
  
    <h2 className="card-title text-center mx-auto">{Data.name}</h2>
   

  
</div>
    </Link>
  );
}

export default Categories;