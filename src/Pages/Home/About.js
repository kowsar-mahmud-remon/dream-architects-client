import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/about.jpg';

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 my-5">
      <div className="hero-content gap-10 grid md:grid-cols-2 flex-col lg:flex-row">
        <img src={img} alt='' className="w-3/4 mx-auto rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold text-indigo-600">About Our Company
          </h1>
          <p className="py-6 text-lg">Your dream: to make beautiful things that make life more beautiful. To capture and reflect the world in a meaningful, unique way. Our engineers facilitate project implementation from design to construction, for flawless execution and results.
          </p>
          <Link to='/services'><button className="btn  btn-outline btn-secondary rounded-md px-5">Start Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default About;