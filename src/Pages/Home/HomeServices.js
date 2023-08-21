import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../Shared/ServiceCard';

const HomeServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('https://dream-architects-server.vercel.app/home')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  return (
    <div className="my-10 px-5 lg:px-0">
      <div className='text-center mb-5'>
        <h2 className='text-5xl font-semibold mb-10 mt-2'>My Services</h2>
      </div>
      <div className="">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            services.map(service => <ServiceCard
              key={service._id}
              service={service}
            ></ServiceCard>)
          }
        </div>
      </div>
      <div className="text-center my-10">
        <Link to='/services' className=''><button className='btn btn-secondary bg-indigo-900 text-white rounded-md px-10 border-0'>View All</button></Link>
      </div>
    </div>
  );
};

export default HomeServices;