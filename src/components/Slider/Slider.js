import React from 'react';
import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';
import Typography from '@material-ui/core/Typography';
import GiphyApiService from '../../services/giphy-api-service';
import Slider from '@material-ui/core/Slider';
import { setCurrentGif, setError } from '../../redux/actions';
import './Slider.css';

const WeirdnessSlider = ({searchTerm, error, dispatch }) => {

  function valueText(value)  { return `Weirdness value: ${value}`}
  
  return (
    <div className='sliderDiv'>
      <Typography id="discrete-slider" gutterBottom>
        Weirdness
      </Typography>
      {error.type === 'slider' && <p className='error'>{error.message}</p> }
      <Slider
        defaultValue={0}
        getAriaValueText={valueText}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        onChangeCommitted={(ev, value) => {
          ev.preventDefault();

          if (!searchTerm.trim()) {
            return;
          }
          return GiphyApiService.getGifFromSearch(searchTerm, value).then(gif =>{
            dispatch(batchActions([setCurrentGif(gif), setError({type: ''})]));
          }).catch(()=> dispatch(setError({type: 'slider', message: 'Oops, something went wrong.  Give it another try'})))
        }}
        step={1}
        marks
        min={0}
        max={10}
      />
    </div>
  );
}

export default connect()(WeirdnessSlider)
