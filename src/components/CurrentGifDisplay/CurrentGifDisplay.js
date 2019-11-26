import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToFavorites } from '../../redux/actions';
import WeirdnessSlider from '../Slider/Slider';
import GifDisplay from '../GifDisplay/GifDisplay';


const CurrentGifDisplay = ({ gif, dispatch }) => {
  const history = useHistory();

  if (!gif.images) {
    history.push('/');
    return <></>;
  }

  return (
    <div className="currentGifDisplay">
      <GifDisplay gif={gif}/>
      <button
        onClick={() => {
          dispatch(addToFavorites(gif));
        }}
      >
        LIKE ME
      </button>
      <WeirdnessSlider searchTerm={gif.searchTerm} />
    </div>
  );
};

export default connect()(CurrentGifDisplay);
