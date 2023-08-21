import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bannerImg">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white">I Can Help to Build Your Dream Home</h1>
            <p className="mb-5 text-white">When meeting with your architect for the pre-design phase you should have a final idea of what you want and pictures to go with your vision. This information will help the architect to create the perfect home for you off of your final ideas and visuals.</p>
            <Link to='/services'><button className="btn btn-active btn-secondary text-white">Get Started</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;