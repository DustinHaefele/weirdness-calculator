import React from 'react';
import { connect } from 'react-redux';
import { addToFavorites } from '../../redux/actions';
import './GifDisplay.css';

const GifDisplay = ({ gif, liked, dispatch }) => {
  
  const url = gif.images.original.url;
  const title = gif.title;
  
  return (
    (<div className='gifDisplay'>
      <h3 className='gifTitle'>{title}</h3>
      <img src={url} alt={title}/>
      {(!liked) && <button onClick={() => {
        dispatch(addToFavorites(gif))
      }}>LIKE ME</button>} 
    </div>) 
  )
}

export default connect()(GifDisplay)