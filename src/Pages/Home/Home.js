import React from 'react';
import useTitle from '../../hooks/useTitle';
import Services from '../Services/Services';
import About from './About';
import Banner from './Banner';
import Experience from './Experience';
import HomeServices from './HomeServices';
import MakesGood from './MakesGood';

const Home = () => {
  useTitle('Home');
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <HomeServices></HomeServices>
      <MakesGood></MakesGood>
      <Experience></Experience>
    </div>
  );
};

export default Home;