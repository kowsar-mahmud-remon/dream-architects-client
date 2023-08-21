import React from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';


const NewDesign = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-gray-300 py-10 px-5 lg:px-0'>
      <div className="p-4 bg-indigo-600">
        <h1 className='text-6xl font-extrabold'>01</h1>
        <h4 className='text-2xl font-semibold mt-4'>Schematic Design</h4>
        <p className=' text-lg mt-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
        <IoIosArrowDroprightCircle className=' text-7xl mt-5 cursor-pointer'></IoIosArrowDroprightCircle>
      </div>

      <div className="p-4 bg-indigo-800">
        <h1 className='text-6xl font-extrabold'>02</h1>
        <h4 className='text-2xl font-semibold mt-4'>Documents
        </h4>
        <p className=' text-lg mt-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
        </p>
        <IoIosArrowDroprightCircle className=' text-7xl mt-5 cursor-pointer'></IoIosArrowDroprightCircle>
      </div>
      <div className="p-4 bg-[#133170]">
        <h1 className='text-6xl font-extrabold'>03</h1>
        <h4 className='text-2xl font-semibold mt-4'>Construction</h4>
        <p className=' text-lg mt-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
        </p>
        <IoIosArrowDroprightCircle className=' text-7xl mt-5 cursor-pointer'></IoIosArrowDroprightCircle>
      </div>
      <div className="p-4 bg-[#2450ad]">
        <h1 className='text-6xl font-extrabold'>04</h1>
        <h4 className='text-2xl font-semibold mt-4'>Build Construction</h4>
        <p className=' text-lg mt-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
        </p>
        <IoIosArrowDroprightCircle className=' text-7xl mt-5 cursor-pointer'></IoIosArrowDroprightCircle>
      </div>

    </div>
  );
};

export default NewDesign;