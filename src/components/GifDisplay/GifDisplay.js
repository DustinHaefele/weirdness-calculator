import React from 'react';
import './GifDisplay.css';

export default function GifDisplay(props) {
  return (
    (<div className='gifDisplay'>
      <h3 className='gifTitle'>{props.currentGif.title}</h3>
      {/* <img src={props.currentGif.images.original.url} alt={props.currentGif.title}/> */}
    </div>) 
  )
}