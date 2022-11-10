import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='text-center mt-10'>
      <h2 className='text-3xl'>This Route is Not Exist</h2>
      <h1 className='text-red-800	 text-5xl'>Error 404</h1>
      <Link to='/home'><button className='mt-5 px-4 py-2 rounded bg-secondary text-white font-bold'>Go Back to Home Page</button></Link>
    </div>
  );
};

export default ErrorPage;