import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faArrowAltCircleUp
} from '@fortawesome/free-solid-svg-icons';
// import WeirdnessSlider from '../Slider/Slider';
import SliderContainer from '../../containers/SliderContainer/SliderContainer';
import GifDisplay from '../GifDisplay/GifDisplay';
import './CurrentGifDisplay.css';

export default function CurrentGifDisplay({ gif, favorites, error, setError, addCurrentToFavorites }) {
  function handleAddToFavorites() {
    if(favorites.length >=5){
      setError({
        type: 'like',
        message: 'You can only add 5 Gifs to your favorites.  To add this Gif to favorites you must remove one first.'
      })
      return;
    }
    addCurrentToFavorites(gif);
  }

  return gif.images ? (
    <section className="currentGifSection">
      <h2 className="sectionTitle">YOUR SEARCH RESULTS</h2>
      <div className="currentGifDisplay center">
        <GifDisplay gif={gif} isFavorite={false}/>
      </div>
      {error.type === 'like' && <p className="error">{error.message}</p>}
      <button className="likeButton button" onClick={() => handleAddToFavorites()}>
        <FontAwesomeIcon icon={faThumbsUp} className="thumbsUp" />
      </button>
      <SliderContainer />
    </section>
  ) : (
    <section className="currentGifSection">
      <h2 className="sectionTitle">YOUR SEARCH RESULTS</h2>
      <div className='center'>
        <FontAwesomeIcon icon={faArrowAltCircleUp} className="arrowUp" transform="rotate--30"/>
        <p>Search for a Gif above and your results will appear here when available.</p>
      </div>
    </section>
  );
};

