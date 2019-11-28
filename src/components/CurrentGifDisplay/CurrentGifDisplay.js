import React from 'react';
import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faArrowAltCircleUp
} from '@fortawesome/free-solid-svg-icons';
import { addToFavorites, setCurrentGif } from '../../redux/actions';
import WeirdnessSlider from '../Slider/Slider';
import GifDisplay from '../GifDisplay/GifDisplay';
import './CurrentGifDisplay.css';

const CurrentGifDisplay = ({ gif, error, dispatch }) => {
  function handleAddToFavorites() {
    dispatch(batchActions([addToFavorites(gif), setCurrentGif({})]));
  }

  return gif.images ? (
    <section className="currentGifSection">
      <h2 className="sectionTitle">YOUR SEARCH RESULTS</h2>
      <div className="currentGifDisplay">
        <GifDisplay gif={gif} />
      </div>
      <button className="likeButton" onClick={() => handleAddToFavorites()}>
        <FontAwesomeIcon icon={faThumbsUp} className="thumbsUp" />
      </button>
      <WeirdnessSlider searchTerm={gif.searchTerm} error={error} />
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

export default connect()(CurrentGifDisplay);
