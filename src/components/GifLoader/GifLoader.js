import React from 'react';
// import Lottie from 'react-lottie';
import Lottie from 'react-lottie';
import GifLoader from '../../images/gif-loading.json';
import './GifLoader.css';

export default function Spinner () {

  const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: GifLoader,
      };
  
    return (
      <div className='spinner-div' >
        <Lottie className='lottie-player' options={defaultOptions}/>
        <p>Give us just a second and we'll have your gif ready for you!</p>
      </div>
    )
  }