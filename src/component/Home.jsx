import React from 'react';
import GameCard from './GameCard';
import { useGames } from './GameContext';

const Home = () => {
  const { sortedGames } = useGames();

  return (
    <div className="row ">
      {sortedGames && sortedGames.map((item, index) => <GameCard key={index} item={item} index={index}></GameCard>)}
    </div>
  );
};

export default Home;
