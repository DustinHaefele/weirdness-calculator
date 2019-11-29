import React from 'react';
import { useHistory } from 'react-router';
import GifDisplay from '../GifDisplay/GifDisplay';
import './ResultsDisplay.css';

export default function ResultsDisplay({ favorites, handleRestart }) {
  const history = useHistory();

  if(favorites.length < 5) {
    history.push('/');
  }

  function displayResults() {
    return favorites.map(f => (
      <div key={f.id} className="gifDisplay around">
        <GifDisplay gif={f.gif}  />
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

  return (
    <div className="row">
      <div className="_100 center resultsHeader">
        <h2>You Scored an {average()} out of 10 on the weirdness scale</h2>
      </div>
      <div className='titleDiv'>
      <h3 className='sectionTitle'>The GIFs you liked</h3>
      </div>
      {displayResults()}
      <div className="_100 center">
        <button className="restartButton button" onClick={() => handleRestart()}>
          Start Over
        </button>
      </div>
    </div>
  );
}
