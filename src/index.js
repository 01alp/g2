import React from 'react';
import ReactDOM from 'react-dom/client'; // Import for React 18
import App from './App'; // Assuming your main component is named App.jsx
import { GamesProvider } from './component/GameContext';
import Favorites from './component/Favorites';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GamesProvider>
      <App />
    </GamesProvider>
  </React.StrictMode>
);
