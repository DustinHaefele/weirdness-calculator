import React from 'react';
import './GifDisplay.css';

export default function GifDisplay({ currentGif }) {
  const url = currentGif.images.original.url;
  const title = currentGif.title;
  
  return (
    (<div className='gifDisplay'>
      <h3 className='gifTitle'>{title}</h3>
      <img src={url} alt={title}/>
    </div>) 
  )
}