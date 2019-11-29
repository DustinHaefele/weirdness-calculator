import React from 'react';
import Typography from '@material-ui/core/Typography';
import GiphyApiService from '../../services/giphy-api-service';
import Slider from '@material-ui/core/Slider';
import './Slider.css';

export default function WeirdnessSlider ({ gif, error, setCurrentGif, setError }) {
  function valueText(value) {
    return `Weirdness value: ${value}`;
  }

  const marks = [
    {
      value: 0,
      label: '0: Least weird'
    },
    {
      value: 1,
      label: ''
    },
    {
      value: 2,
      label: ''
    },
    {
      value: 3,
      label: ''
    },
    {
      value: 4,
      label: ''
    },
    {
      value: 5,
      label: ''
    },
    {
      value: 6,
      label: ''
    },
    {
      value: 7,
      label: ''
    },
    {
      value: 8,
      label: ''
    },
    {
      value: 9,
      label: ''
    },
    {
      value: 10,
      label: '10: Weirdest'
    }
  ];

  function handleSliderMove(ev, value) {
    ev.preventDefault();

    if (!gif.searchTerm.trim()) {
      return;
    }

    return GiphyApiService.getGifFromSearch(gif.searchTerm, value)
      .then(gif => {
        setCurrentGif(gif);
      })
      .catch(() =>
        setError({
          type: 'slider',
          message: 'Oops, something went wrong.  Give it another try'
        })
      );
  }

  return (
    <div className="sliderDiv">
      {error.type === 'slider' && <p className="error">{error.message}</p>}
      <Typography id="discrete-slider" gutterBottom>
        Change Weirdness
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valueText}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        onChangeCommitted={(ev, value) => handleSliderMove(ev, value)}
        step={1}
        marks={marks}
        min={0}
        max={10}
      />
    </div>
  );
};


