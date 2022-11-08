import React from 'react';

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">We Help to Build Your Dream Home</h1>
            <p className="mb-5">When meeting with your architect for the pre-design phase you should have a final idea of what you want and pictures to go with your vision. This information will help the architect to create the perfect home for you off of your final ideas and visuals.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;