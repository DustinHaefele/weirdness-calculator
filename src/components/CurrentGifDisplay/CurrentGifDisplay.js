import React from 'react';
import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';
import { addToFavorites, setCurrentGif } from '../../redux/actions';
import WeirdnessSlider from '../Slider/Slider';
import GifDisplay from '../GifDisplay/GifDisplay';
import './CurrentGifDisplay.css';

const CurrentGifDisplay = ({ gif, error, dispatch }) => {
  return gif.images ? (
    <div>
      <h2>YOUR SEARCH RESULTS</h2>
      <div className='currentGifDisplay'>
        <GifDisplay gif={gif} />
      </div>
      <button
        onClick={() => {
          dispatch(batchActions([addToFavorites(gif), setCurrentGif({})]));
        }}
      >
        LIKE ME
      </button>
      <WeirdnessSlider searchTerm={gif.searchTerm} error={error} />
    </div>
  ) : (
    <div>
      <h2>YOUR SEARCH RESULTS</h2>
      <p>Your search results will appear here when they are available</p>
    </div>
  );
};

export default connect()(CurrentGifDisplay);
