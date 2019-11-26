import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import './GifDisplay.css';

const GifDisplay = ({ gif }) => {
  
  const history = useHistory();
  
  if(!gif.images) {
    history.push('/');
    return <></>;
  }

  const url =  gif.images.downsized_large.url || ''
  const title = `${gif.searchTerm}: ${gif.title}` || '';

  
  
  return (
    (<div className='gifDisplay'>
      <h3 className='gifTitle'>{title}</h3>
      <img src={url} alt={title}/>
    </div>) 
  )
}


export default connect()(GifDisplay)