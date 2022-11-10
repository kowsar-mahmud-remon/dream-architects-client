import React from 'react';

const Experience = () => {
  return (
    <div className='my-20'>
      <h2 className='text-4xl text-center mb-10 font-bold'>My Experience</h2>
      <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4 flex-col lg:flex-row">

        <div className="text-center py-16 border rounded bg-base-200">
          <h2 className='text-5xl font-bold mb-4 text-indigo-700'>10</h2>
          <p className=' text-xl'>Years Experience</p>
        </div>
        <div className="text-center py-16 border rounded bg-base-200">
          <h2 className='text-5xl font-bold mb-4 text-indigo-700'>900+</h2>
          <p className=' text-xl'>Projects Done</p>
        </div>
        <div className="text-center py-16 border rounded bg-base-200">
          <h2 className='text-5xl font-bold mb-4 text-indigo-700'>800+</h2>
          <p className=' text-xl'>Happy Clients</p>
        </div>
        <div className="text-center py-16 border rounded bg-base-200">
          <h2 className='text-5xl font-bold mb-4 text-indigo-700'>1200+</h2>
          <p className=' text-xl'>Designs</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;