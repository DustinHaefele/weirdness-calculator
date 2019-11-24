import React from 'react';
import './GifDisplay.css';

export default function GifDisplay(props) {

  return (
    <div className='gifDisplay'>
      <h3 className='gifTitle'>{props.description}</h3>
      <img src={props.gif_url} alt={props.description}/>
    </div>
  )
}