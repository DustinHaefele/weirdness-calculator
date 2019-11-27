import React from 'react';
import GifDisplay from '../GifDisplay/GifDisplay';
import './Favorites.css';

export default function Favorites({ favorites, dispatch }) {
  
  function displayFavorites() {
    return favorites.map(f => (
      <div key={f.id}>
        <GifDisplay gif={f.gif} isFavorite={true} />
      </div>
    ));
  }

  return (
    <div>
      {favorites.length > 0 ? (
        displayFavorites()
      ) : (
        <p>When you add gifs to your favorites they will be displayed here</p>
      )}
    </div>
  );
}
