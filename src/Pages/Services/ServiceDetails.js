import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
  const { _id, img, price, title, description } = useLoaderData();
  return (
    <div className="card card-compact bg-base-100 shadow-xl md:w-1/2 mx-auto my-10">
      <figure><img src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
        <div className="card-actions justify-end">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;