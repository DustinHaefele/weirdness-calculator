import React from 'react';
// import Lottie from 'react-lottie';
import Lottie from 'react-lottie';
import LoadingGif from '../../images/gif-loading.json';
import './GifLoader.css';

export default function GifLoader ({ isFavorite }) {

  const isHidden = isFavorite ? 'hidden' : '';

  const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LoadingGif,
      };
  
    return (
      <div className='loader-div' >
        <Lottie className='lottie-player' options={defaultOptions}/>
        <p className={isHidden}>Loading Gif...</p>
      </div>
    )
  }