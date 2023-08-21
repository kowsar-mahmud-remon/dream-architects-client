import React from 'react';
import useTitle from '../../hooks/useTitle';
import Services from '../Services/Services';
import About from './About';
import Banner from './Banner';
import Experience from './Experience';
import HomeServices from './HomeServices';
import MakesGood from './MakesGood';
import CreateYourArchitecture from './CreateYourArchitecture';
import DreamHome from './DreamHome';
import ExperiencePage from './ExperiencePage';
import NewDesign from './NewDesign';

const Home = () => {
  useTitle('Home');
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <HomeServices></HomeServices>
      <NewDesign></NewDesign>
      <CreateYourArchitecture></CreateYourArchitecture>
      <MakesGood></MakesGood>
      <DreamHome></DreamHome>
      <ExperiencePage></ExperiencePage>
      <Experience></Experience>
    </div>
  );
};

export default Home;