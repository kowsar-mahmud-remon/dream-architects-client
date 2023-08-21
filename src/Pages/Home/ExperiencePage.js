import React from 'react';
import experienceImg from '../../assets/experienceImg.jpg';
import { Link } from 'react-router-dom';

const ExperiencePage = () => {
  return (
    <div className='flex items-center py-10 px-5 lg:px-0'>
      <div className="hidden md:block">
        <img src={experienceImg} alt='' className="w-[2000px] rounded" />

      </div>

      <div className="bg-base-200 md:ml-[-190px] md:p-5 lg:p-10 rounded">
        <h1 className="text-3xl lg:text-5xl font-bold text-indigo-600">We have 10+ years of experience
        </h1>
        <p className="py-6 text-lg">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <div className="my-6">
          <Link to='/services' className=''><button className='btn btn-secondary bg-indigo-900 text-white rounded px-12 border-0'>Red More</button></Link>
        </div>
      </div>

    </div>
  );
};

export default ExperiencePage;