import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/about.jpg';

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 my-5">
      <div className="hero-content gap-10 grid md:grid-cols-2 flex-col lg:flex-row">
        <img src={img} className="w-3/4 mx-auto rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="py-6">I am an Architects designer. I have 2 years' experience in this field. I Can Design anything for your Dream Home. Customer satisfaction is my main purpose.</p>
          <Link to='/services'><button className="btn  btn-outline btn-secondary">My Services</button></Link>
        </div>
      </div>
    </div>
  );
};

export default About;