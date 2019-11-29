import React from 'react';
import { batchActions } from 'redux-batched-actions';
import { setError, setIsCalc } from '../../redux/actions';
import { useHistory } from 'react-router';
import GifDisplay from '../GifDisplay/GifDisplay';
import './Favorites.css';

export default function Favorites({ favorites, error, dispatch }) {
  const history = useHistory();

  function displayFavorites() {
    return favorites.map(f => (
      <div key={f.id} className="_45 gifDisplay around">
        <GifDisplay gif={f.gif} isFavorite={true} />
      </div>
    ));
  }

  function calculateWeirdness() {
    if (favorites.length >= 5) {
      dispatch(batchActions([setError({}), setIsCalc(true)]));
      history.push('/results');
      return;
    }
    dispatch(
      setError({
        type: 'favorites',
        message: `You must have five favorites before we can calculate how weird you are. Please add ${5 -
          favorites.length} more gifs and try again!`
      })
    );
  }

  const gifsNeeded = 5 - favorites.length;


  return (
    <div className="row">
      {favorites.length > 0 ? (
        displayFavorites()
      ) : (
        <p>When you add gifs to your favorites they will be displayed here</p>
      )}

      <div className="_100 center">
        {error.type === 'favorites' && <p className="error">{error.message}</p>}
        <button className="calculateButton button" onClick={calculateWeirdness}>
          Calculate Weirdness
        </button>
        <p>
          You must like <strong>{gifsNeeded}</strong> more gifs to calculate
          weirdness
        </p>
      </div>
    </div>
  );
}
