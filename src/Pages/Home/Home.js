import React from 'react';
import Services from '../Services/Services';
import About from './About';
import Banner from './Banner';
import Experience from './Experience';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Experience></Experience>
    </div>
  );
};

export default Home;