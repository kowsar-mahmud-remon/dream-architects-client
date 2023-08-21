import React from 'react';
import dreamHome from '../../assets/dreamHome.png';
import { Link } from 'react-router-dom';


const DreamHome = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 items-center py-10 px-5 lg:px-0'>
      <div className="">
        <p className='text-base lg:text-lg'>CREATE YOUR</p>
        <h1 className="text-3xl lg:text-5xl font-bold text-indigo-600">Dream Home
        </h1>
        <p className="py-6 text-lg">We are founded on the belief that our collaborative nature and the journey we take with our clients is reflected in every project by creating exciting, functional, modern spaces.
        </p>
        <div className=" my-6">
          <Link to='/services' className=''><button className='btn btn-secondary bg-indigo-900 text-white rounded px-12 border-0'>Start Now</button></Link>
        </div>
      </div>
      <div className="">
        <img src={dreamHome} alt='' className="w-3/4 mx-auto rounded" />

      </div>
    </div>
  );
};

export default DreamHome;