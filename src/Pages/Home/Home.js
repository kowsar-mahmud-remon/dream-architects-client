import React from 'react';
import useTitle from '../../hooks/useTitle';
import Services from '../Services/Services';
import About from './About';
import Banner from './Banner';
import Experience from './Experience';
import HomeServices from './HomeServices';

const Home = () => {
  useTitle('Home');
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