import React from 'react';
import Services from '../Services/Services';
import About from './About';
import Banner from './Banner';
import Experience from './Experience';
import HomeServices from './HomeServices';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <HomeServices></HomeServices>
      <Experience></Experience>
    </div>
  );
};

export default Home;