import React from 'react';
import { useHistory } from 'react-router';
import GifDisplay from '../GifDisplay/GifDisplay';
import './Favorites.css';

//Presentational component to display any GIFs added to favorites.
export default function Favorites({ favorites, error, setError, handleRemove }) {
  const history = useHistory();

  function displayFavorites() {
    return favorites.map(f => (
      <div key={f.id} className="_45 gifDisplay around columnDisplay">
        <GifDisplay gif={f.gif} handleRemove={handleRemove} isFavorite={true} />
      </div>
    ));
  }

  function calculateWeirdness() {
    if (favorites.length >= 5) {
      setError({});
      history.push('/results');
      return;
    }
      setError({
        type: 'favorites',
        message: `You must have five favorites before we can calculate how weird you are. Please add ${5 -
          favorites.length} more GIFs and try again!`
      });
  }

  const gifsNeeded = 5 - favorites.length;


  return (
    <div className="row">
      {favorites.length > 0 ? (
        displayFavorites()
      ) : (
        <p>When you add GIFs to your favorites they will be displayed here</p>
      )}

      <div className="_100 center">
        {error.type === 'favorites' && <p className="error">{error.message}</p>}
        <button className="calculateButton button" onClick={calculateWeirdness}>
          Calculate Weirdness
        </button>
        <p>
          You must like <strong>{gifsNeeded}</strong> more GIFs to calculate
          weirdness
        </p>
      </div>
    </div>
  );
}
