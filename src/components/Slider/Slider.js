import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import './Slider.css'

export default function WeirdnessSlider() {

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
        step={1}
        marks
        min={0}
        max={10}
      />
    </div>
  );
}
