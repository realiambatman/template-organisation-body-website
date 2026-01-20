import React from 'react';
import Hero from './Hero';
import About from './About';
import Leadership from './Leadership';
import Events from './Events';
import Join from './Join';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  return (
    <>
      <Hero setCurrentPage={setCurrentPage} />
      <About />
      <Leadership />
      <Events />
      <Join />
    </>
  );
};

export default Home;