import React from 'react';
import { Link } from 'react-router-dom';
import cars from '../../imgs/Hybrid car-bro.svg'
import AboutUs from './AboutUs';
import Advertise from './Advertise';
import Category from './Home.Category';
function Home(props) {
  return (
    <div>
     <div className="hero min-h-[75vh] ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img alt='' src={cars} className="max-w-sm rounded-lg " />
    <div>
      <h1 className="text-5xl font-bold">Prime <span className='text-green-500'>Motors</span> </h1>
      <p className="py-6">This is great platform from 2nd hand cars or used car . Get your dream car in fair price . you can find user car in fair price. <br /> aslo you can sell your car in this platfrom </p>
      <Link  to='/category/637f1ff225cc8836cc508466' className="btn btn-primary">Get Started</Link>
    </div>
  </div>
</div>


<Category> </Category>
<Advertise> </Advertise>
<AboutUs> </AboutUs>
       
    </div>
  );
}

export default Home;