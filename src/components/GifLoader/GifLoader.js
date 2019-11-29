import React from 'react';
import Lottie from 'react-lottie';
import LoadingGif from '../../images/gif-loading.json';
import './GifLoader.css';

//Presentational component to display an animation while the GIF is loading.
export default function GifLoader({ isFavorite }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingGif
  };

  return (
    <div className="loader-div">
      <Lottie className="lottie-player" options={defaultOptions} />
      {!isFavorite && <p>Loading Gif...</p>}
    </div>
  );
}
