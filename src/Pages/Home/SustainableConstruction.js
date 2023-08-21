import React from 'react';
import { Link } from 'react-router-dom';

const SustainableConstruction = () => {
  return (
    <div className='flex justify-center py-10 px-5 lg:px-0'>
      <div className="text-center lg:w-3/4">
        <h1 className="text-3xl lg:text-6xl font-bold text-indigo-600">We are sustainable construction
        </h1>
        <p className="py-7 text-lg">We are the authority for completing construction projects in environmentally sensitive surroundings. Our team is focused on finding innovative solutions to the most complex construction projects while ensuring that we limit our environmental footprint and impact.
        </p>
        <div className=" my-6">
          <Link to='/services' className=''><button className='btn btn-secondary bg-indigo-900 text-white rounded px-12 border-0'>Start Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default SustainableConstruction;