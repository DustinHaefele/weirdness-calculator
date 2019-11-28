import React from 'react';
import { batchActions } from 'redux-batched-actions';
import { setError, setIsCalc } from '../../redux/actions';
import { useHistory } from 'react-router';
import GifDisplay from '../GifDisplay/GifDisplay';
import './Favorites.css';

export default function Favorites({ favorites, error, isCalc, dispatch }) {
  const history = useHistory();

  function displayFavorites() {
    return favorites.map(f =>
      !isCalc ? (
        <div key={f.id} className="_45 gifDisplay around">
          <GifDisplay gif={f.gif} isFavorite={true} />
        </div>
      ) : (
        <div key={f.id} className="gifDisplay around">
          <GifDisplay gif={f.gif} isFavorite={true} />
          <h4>{f.gif.weirdness}/10</h4>
        </div>
      )
    );
  }

  function calculateWeirdness() {
    if (favorites.length >= 5) {
      dispatch(batchActions([setError({}), setIsCalc(true)]));
      history.push('/calculate');
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
  function average() {
    let total = 0;
    let count = 0;
    favorites.forEach(f => {
      count++;
      total += f.gif.weirdness;
    });
    return total / count;
  }

  return (
    <div className="row">
      {isCalc && (
        <div className="_100 center">
          <h2>You Scored an {average()} out of 10 on the weirdness scale</h2>
        </div>
      )}
      {favorites.length > 0 ? (
        displayFavorites()
      ) : (
        <p>When you add gifs to your favorites they will be displayed here</p>
      )}
      {!isCalc &&
      <div className="_100 center">
        {error.type === 'favorites' && <p className="error">{error.message}</p>}
        <button className="calculateButton button" onClick={calculateWeirdness}>
          Calculate Weirdness
        </button>
        <p>
          You must like <strong>{gifsNeeded}</strong> more gifs to calculate
          weirdness
        </p>
      </div>}
    </div>
  );
}
