import React, { createContext, useContext, useState, useEffect } from 'react';

const GamesContext = createContext(null);

export const useGames = () => useContext(GamesContext);

export const GamesProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [sortedGames, setSortedGames] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('ascending');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState([]);

  // Fetching and initializing games data
  useEffect(() => {
    fetch('/games_list.json')
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
        filterAndSortGames(data, selectedCategory, sortBy, sortOrder);
      });
  }, []);

  const sortGames = (sortCriteria, order) => {
    setSortBy(sortCriteria);
    setSortOrder(order);
    // Call filterAndSortGames to sort games with new criteria
    filterAndSortGames(games, selectedCategory, sortCriteria, order);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Call filterAndSortGames to filter games with new category
    filterAndSortGames(games, category, sortBy, sortOrder);
  };

  const filterAndSortGames = (allGames, category, sortCriteria, order) => {
    let filteredGames = category === 'All' ? allGames : allGames.filter((game) => game.category === category);
    filteredGames.sort((a, b) => {
      let comparison = 0;
      if (sortCriteria === 'name') {
        comparison = a.name.localeCompare(b.name);
      } else if (sortCriteria === 'rating' || sortCriteria === 'activeUsers') {
        comparison = a[sortCriteria] - b[sortCriteria];
      }
      return order === 'ascending' ? comparison : -comparison;
    });
    setSortedGames(filteredGames);
  };

  useEffect(() => {
    filterAndSortGames(games, selectedCategory, sortBy, sortOrder);
  }, [games, selectedCategory, sortBy, sortOrder]);

  useEffect(() => {
    const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    console.log('IDs in storage:', favoritesFromStorage);
    const filteredFavorites = games.filter((game) => favoritesFromStorage.includes(game.id));
    console.log('Filtered favorites on load:', filteredFavorites);
    setFavorites(filteredFavorites);
  }, [games]);

  const handleAddToFavorites = (game) => {
    console.log('Adding game to favorites:', game);
    const updatedFavorites = [...favorites, game];
    console.log('New favorites list before update:', updatedFavorites);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites.map((g) => g.id)));
    console.log('Favorites saved to storage:', localStorage.getItem('favorites'));
  };

  const handleRemoveFromFavorites = (gameId) => {
    const updatedFavorites = favorites.filter((game) => game.id !== gameId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites.map((g) => g.id)));
  };

  const value = {
    games,
    sortedGames,
    setSortBy,
    setSortOrder,
    sortGames,
    selectedCategory,
    handleCategoryChange,
    handleRemoveFromFavorites,
    handleAddToFavorites,
    favorites,
  };

  return <GamesContext.Provider value={value}>{children}</GamesContext.Provider>;
};
