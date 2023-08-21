import React, { useEffect, useState } from 'react';

const Experience = () => {
  const [counted, setCounted] = useState(false);
  const [years, setYears] = useState(0);
  const [sellers, setSellers] = useState(0);
  const [clients, setClients] = useState(0);
  const [products, setProducts] = useState(0);

  useEffect(() => {
    if (!counted) {
      const interval = setInterval(() => {
        if (years < 10) {
          setYears((prevYears) => prevYears + 1);
        }
        if (sellers < 900) {
          setSellers((prevSellers) => prevSellers + 1);
        }
        if (clients < 800) {
          setClients((prevClients) => prevClients + 1);
        }
        if (products < 1200) {
          setProducts((prevProducts) => prevProducts + 1);
        }

        if (years === 10 && sellers === 900 && clients === 8000 && products === 1200) {
          clearInterval(interval);
          setCounted(true);
        }
      }, 5);

      return () => clearInterval(interval);
    }
  }, [counted, years, sellers, clients, products]);
  return (
    <div className='my-20 px-5 lg:px-0'>
      <h2 className='text-4xl text-center mb-10 font-bold'>My Experience</h2>
      <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4 flex-col lg:flex-row">

        <div className="text-center py-16 border border-gray-400 hover:border-indigo-700 rounded-md bg-base-200">
          <h2 className='text-5xl font-bold mb-4 text-indigo-700'>{years}</h2>
          <p className=' text-xl'>Years Experience</p>
        </div>
        <div className="text-center py-16 border border-gray-400 hover:border-indigo-700 rounded-md bg-base-200">
          <h2 className='text-5xl font-bold mb-4 text-indigo-700'>{sellers}+</h2>
          <p className=' text-xl'>Projects Done</p>
        </div>
        <div className="text-center py-16 border border-gray-400 hover:border-indigo-700 rounded-md bg-base-200">
          <h2 className='text-5xl font-bold mb-4 text-indigo-700'>{clients}+</h2>
          <p className=' text-xl'>Happy Clients</p>
        </div>
        <div className="text-center py-16 border border-gray-400 hover:border-indigo-700 rounded-md bg-base-200">
          <h2 className='text-5xl font-bold mb-4 text-indigo-700'>{products}+</h2>
          <p className=' text-xl'>Designs</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;