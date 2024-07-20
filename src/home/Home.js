import React from 'react';
import Banner from '../components/Banner';
import FaviouritBook from '../home/FaviouritBook';
import FavBook from './FavBook';
import PromoBanner from './PromoBanner';
import OtherBook from './OtherBook';
import Review from './Review';



const Home = () => {
  return (
   <div>
    <Banner />
    <FaviouritBook />
    <FavBook />
    <PromoBanner />
    <OtherBook />
    <Review />
   </div>
  );
};

export default Home;
