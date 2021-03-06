import React from 'react';
import Typography from '@material-ui/core/Typography';
import GiphyApiService from '../../services/giphy-api-service';
import Slider from '@material-ui/core/Slider';
import './Slider.css';

//Presentational component to display slider for user to change weirdness
export default function WeirdnessSlider ({ gif, favorites, error, setCurrentGif, setError }) {
  //text for slider Aria
  function valueText(value) {
    return `Weirdness value: ${value}`;
  }
// labels for the slider
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

    const searchTermInFavorites = favorites.some(fav => {
      return fav.gif.searchTerm === gif.searchTerm;
    });
    //Error handling conditions before searching with a new weirdness
    if (!gif.searchTerm.trim()) {
      setError({
        type: 'slider',
        message: 'Please enter a search term'
      });
      return;
    } else if (searchTermInFavorites) {
      setError({
        type: 'slider',
        message:
          'You can only add one GIF to favorites for each search term.  Try searching another term, or remove the GIF with this search term from favorites and try again'
      });
      return;
    }

    return GiphyApiService.getGifFromSearch(gif.searchTerm, value)
      .then(newGif => {
        if (newGif.id === gif.id) {
          setError({
            type: 'slider',
            message: "Oops, we grabbed the same GIF!  Try a different weirdness.  If this problem persists we probably don't have a lot of GIFs that match your search term so you may want to search something else"
          })
          return;
        }
        setCurrentGif(newGif);
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


