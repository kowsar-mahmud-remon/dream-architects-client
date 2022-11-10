import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import ServiceCard from '../Shared/ServiceCard';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useTitle('Service');

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setLoading(false);
      });

  }, []);

  if (loading) {
    return <div className='text-center my-20'>
      <button className="btn btn-square loading text-success"></button>
    </div>;

  }

  return (
    <div className="my-10">
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
    </div>
  );
};

export default Services;