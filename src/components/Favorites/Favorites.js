import React from 'react';
import GifDisplay from '../GifDisplay/GifDisplay';

export default function Favorites({ favorites, dispatch }) {
  
  function displayFavorites() {
    return favorites.map(f => <GifDisplay gif={f.gif} key={f.id}/>)
  };



  return (
    <div>
      <h2>YOUR LIKED GIFS</h2>
      {(favorites.length > 0) ? displayFavorites() 
      : <p>When you add gifs to your favorites they will be displayed here</p>}
    </div>
  );
}
