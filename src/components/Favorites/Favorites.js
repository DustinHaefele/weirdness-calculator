import React from 'react';
import { removeFromFavorites } from '../../redux/actions';
import GifDisplay from '../GifDisplay/GifDisplay';

export default function Favorites({ favorites, dispatch }) {
  
  function handleRemove(id) {
    dispatch(removeFromFavorites(id))
  }

  function displayFavorites() {
    return favorites.map(f => <div key={f.id} onClick={()=>handleRemove(f.id)}><GifDisplay gif={f.gif}/></div>)
  };



  return (
    <div>
      {(favorites.length > 0) ? displayFavorites() 
      : <p>When you add gifs to your favorites they will be displayed here</p>}
    </div>
  );
}
