import React from 'react';
import { batchActions } from 'redux-batched-actions';
import { setError, setCurrentGif } from '../../redux/actions';
import { useHistory } from 'react-router';
import GifDisplay from '../GifDisplay/GifDisplay';
import './ResultsDisplay.css';

export default function ResultsDisplay({ favorites, dispatch }) {
  const history = useHistory();

  function displayFavorites() {
    return favorites.map(f => (
      <div key={f.id} className="gifDisplay around">
        <GifDisplay gif={f.gif} isFavorite={true} />
        <h4>{f.gif.weirdness}/10</h4>
      </div>
    ));
  }

  function average() {
    let total = 0;
    let count = 0;
    favorites.forEach(f => {
      count++;
      total += f.gif.weirdness;
    });
    return Math.round(total / count);
  }

  function handleRestart() {
    dispatch(batchActions([setError({}), setCurrentGif({})]));
    history.push('/');
  }

  return (
    <div className="row">
      <div className="_100 center">
        <h2>You Scored an {average()} out of 10 on the weirdness scale</h2>
      </div>
      {displayFavorites()}
      <div className="_100 center">
        <button className="restartButton button" onClick={handleRestart}>
          Start Over
        </button>
      </div>
    </div>
  );
}