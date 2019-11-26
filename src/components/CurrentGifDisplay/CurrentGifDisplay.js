import React from 'react';
import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';
import { addToFavorites, setCurrentGif } from '../../redux/actions';
import WeirdnessSlider from '../Slider/Slider';
import GifDisplay from '../GifDisplay/GifDisplay';

const CurrentGifDisplay = ({ gif, dispatch }) => {
  return gif.images ? (
    <div className="currentGifDisplay">
      <h2>YOUR SEARCH RESULTS</h2>
      <GifDisplay gif={gif} />
      <button
        onClick={() => {
          dispatch(batchActions([addToFavorites(gif), setCurrentGif({})]));
        }}
      >
        LIKE ME
      </button>
      <WeirdnessSlider searchTerm={gif.searchTerm} />
    </div>
  ) : (
    <div className="currentGifDisplay">
      <h2>YOUR SEARCH RESULTS</h2>
      <p>Your search results will appear here when they are available</p>
    </div>
  );
};

export default connect()(CurrentGifDisplay);
