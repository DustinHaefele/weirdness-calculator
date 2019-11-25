import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToFavorites } from '../../redux/actions';
import WeirdnessSlider from '../Slider/Slider';
import './GifDisplay.css';

const GifDisplay = ({ gif, liked, dispatch}) => {
  
  const history = useHistory();
  
  if(!gif.images) {
    history.push('/');
    return <></>;
  }

  const url = gif.images.original.url || '';
  const title = gif.title || '';

  
  
  return (
    (<div className='gifDisplay'>
      <h3 className='gifTitle'>{title}</h3>
      <img src={url} alt={title}/>
      {(!liked) && <button onClick={() => {
        dispatch(addToFavorites(gif))
      }}>LIKE ME</button>}
      <WeirdnessSlider />
    </div>) 
  )
}

export default connect()(GifDisplay)