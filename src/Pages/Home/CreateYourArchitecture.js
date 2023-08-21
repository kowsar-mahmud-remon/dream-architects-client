import React from 'react';
import { GiConcreteBag } from 'react-icons/gi';
import { IoMdContacts } from 'react-icons/io';
import { BiSolidStar } from 'react-icons/bi';
import { BiSolidStarHalf } from 'react-icons/bi';
import attachment_design from '../../assets/attachment_design.jpg';

import { Link } from 'react-router-dom';


const CreateYourArchitecture = () => {
  return (
    <div className='py-20 px-5 lg:px-0'>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="shadow-lg py-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-indigo-600">How to create your architecture website design
          </h1>
          <p className='text-indigo-700 font-bold text-6xl'>_</p>
          <p className="py-6 text-lg ml-7">If you want an amazing architecture website that stands out from the competition, work with a professional designer. Find and hire a designer to make your vision come to life, or host a design contest and get ideas from designers around the world.
          </p>

          <div className="grid grid-cols-2 gap-10 ml-7 mt-5">
            <div className="">
              <GiConcreteBag className='text-3xl text-indigo-700'></GiConcreteBag>
              <h4 className='mt-2 text-lg font-bold'>Start a contest</h4>
              <p className='mt-2'>Designers from around the world pitch you ideas. You provide feedback, hone your favorites and choose a winner.
              </p>
            </div>
            <div className="">
              <IoMdContacts className='text-4xl text-indigo-700'></IoMdContacts>
              <h4 className='mt-2 text-lg font-bold'>Start a contest</h4>
              <p className='mt-2'>Designers from around the world pitch you ideas. You provide feedback, hone your favorites and choose a winner.
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-5 mt-12 ml-7 mr-5">
            <Link className='w-1/2' to='/services'>
              <button className="btn btn-outline btn-secondary w-full">Start a contest</button>
            </Link>
            <Link className='w-1/2' to='/services'>
              <button className="btn btn-outline btn-secondary w-full">Start a project</button>
            </Link>
          </div>

          <div className=" mt-14">
            <div className="flex items-center justify-center space-x-1 text-indigo-700 text-4xl">
              <BiSolidStar></BiSolidStar>
              <BiSolidStar></BiSolidStar>
              <BiSolidStar></BiSolidStar>
              <BiSolidStar></BiSolidStar>
              <BiSolidStarHalf></BiSolidStarHalf>
            </div>
            <p className=' text-center text-gray-400 ml-7 mt-4'>4.6 average from 2,355 web page design customer reviews
            </p>
          </div>
        </div>
        <div className="mt-20 lg:mt-44">
          <div className="flex justify-center relative overflow-hidden bg-cover bg-no-repeat cursor-pointer">

            <img
              src={attachment_design}
              class="w-full rounded "
              alt="mobile" />
            <div
              class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-indigo-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-25"></div>

          </div>

          <p className='mt-1'>by Remon_</p>

          <Link to='/'>
            <p className='mt-2 text-lg font-medium text-center'>Learn more about web page designs {"->"}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateYourArchitecture;