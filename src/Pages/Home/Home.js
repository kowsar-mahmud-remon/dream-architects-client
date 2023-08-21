import React from 'react';
import useTitle from '../../hooks/useTitle';
import About from './About';
import Banner from './Banner';
import HomeServices from './HomeServices';
import MakesGood from './MakesGood';
import CreateYourArchitecture from './CreateYourArchitecture';
import DreamHome from './DreamHome';
import ExperiencePage from './ExperiencePage';
import NewDesign from './NewDesign';
import SustainableConstruction from './SustainableConstruction';
import GetInTouch from './GetInTouch';

const Home = () => {
  useTitle('Home');
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <HomeServices></HomeServices>
      <NewDesign></NewDesign>
      <SustainableConstruction></SustainableConstruction>
      <CreateYourArchitecture></CreateYourArchitecture>
      <MakesGood></MakesGood>
      <DreamHome></DreamHome>
      <ExperiencePage></ExperiencePage>
      <GetInTouch></GetInTouch>
    </div>
  );
};

export default Home;