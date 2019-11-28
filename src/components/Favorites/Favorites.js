import React from 'react';
import GifDisplay from '../GifDisplay/GifDisplay';
import './Favorites.css';

export default function Favorites({ favorites }) {
  
  function displayFavorites() {
    return favorites.map(f => (
        <GifDisplay key={f.id} gif={f.gif} isFavorite={true} />
    ));
  }

  return (
    <div className='row'>
      {favorites.length > 0 ? (
        displayFavorites()
      ) : (
        <p>When you add gifs to your favorites they will be displayed here</p>
      )}
    </div>
  );
}
