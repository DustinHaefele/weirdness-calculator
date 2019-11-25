import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import GiphyApiService from '../../services/giphy-api-service';
import Slider from '@material-ui/core/Slider';
import { setCurrentGif } from '../../redux/actions';
import './Slider.css';

const WeirdnessSlider = ({ dispatch }) => {

  function valueText(value)  { return `Weirdness value: ${value}`}
  
  return (
    <div className='sliderDiv'>
      <Typography id="discrete-slider" gutterBottom>
        Weirdness
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valueText}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        onChangeCommitted={(ev, value) => {
          ev.preventDefault();
          //need to save search term and access it again here
          const searchTerm = 'chicken';
          if (!searchTerm.trim()) {
            return;
          }
          return GiphyApiService.getGifFromSearch(searchTerm, value).then(gif =>{
            dispatch(setCurrentGif(gif))
          });
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
