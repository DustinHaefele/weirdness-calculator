import React from 'react';
import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';
import Typography from '@material-ui/core/Typography';
import GiphyApiService from '../../services/giphy-api-service';
import Slider from '@material-ui/core/Slider';
import { setCurrentGif, setError } from '../../redux/actions';
import './Slider.css';

const WeirdnessSlider = ({ searchTerm, error, dispatch }) => {
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
        onChangeCommitted={(ev, value) => {
          ev.preventDefault();

          if (!searchTerm.trim()) {
            return;
          }
          return GiphyApiService.getGifFromSearch(searchTerm, value)
            .then(gif => {
              dispatch(batchActions([setCurrentGif(gif), setError({})]));
            })
            .catch(() =>
              dispatch(
                setError({
                  type: 'slider',
                  message: 'Oops, something went wrong.  Give it another try'
                })
              )
            );
        }}
        step={1}
        marks={marks}
        min={0}
        max={10}
      />
    </div>
  );
};

export default connect()(WeirdnessSlider);
