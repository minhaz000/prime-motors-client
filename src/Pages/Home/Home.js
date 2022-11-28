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
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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