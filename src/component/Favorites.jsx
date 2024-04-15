import React, { useEffect } from 'react';
import GameCard from './GameCard';
import { useGames } from './GameContext';

function Favorites() {
  const { favorites, handleRemoveFromFavorites } = useGames();

  useEffect(() => {
    console.log('Favorites updated:', favorites);
  }, [favorites]);

  if (!favorites || favorites.length === 0) {
    return <div>No favorites added yet.</div>;
  }

  return (
    <div className="row d-flex">
      {favorites.map((item) => (
        <GameCard key={item.id} item={item} handleRemove={() => handleRemoveFromFavorites(item.id)} />
      ))}
    </div>
  );
}

export default Favorites;
