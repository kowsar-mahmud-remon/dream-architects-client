import React from 'react';
import makesgood1 from '../../assets/makesgood1.jpg';
import makesgood2 from '../../assets/makesgood2.jpg';


const MakesGood = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 py-20 px-5 lg:px-0'>
      <div className="flex gap-1 bg-base-200 rounded-md pb-1">
        <div className="">
          <img src={makesgood1} alt='' className="w-80 border border-indigo-700 rounded" />
          <p className=' mt-1'>by Me_</p>
        </div>
        <div className="">
          <img src={makesgood2} alt='' className="w-80 border border-indigo-700 rounded mt-20" />
          <p className=' mt-1'>by Me_</p>
        </div>
      </div>

      <div className="">
        <h1 className="text-3xl lg:text-5xl font-bold text-indigo-600">What makes a good architecture website?
        </h1>
        <p className='text-indigo-700 font-bold text-6xl'>_</p>
        <p className="py-6 text-lg ml-7">A great website shows the world who you are, makes people remember you, and helps potential customers understand if they found what they were looking for. Websites communicate all of that through color, shape and other design elements. Learn how to make your architecture website tell your brand’s story.</p>
      </div>
    </div>
  );
};

export default MakesGood;