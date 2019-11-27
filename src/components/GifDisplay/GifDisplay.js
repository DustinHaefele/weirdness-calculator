import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import './GifDisplay.css';
import ImageLoader from 'rc-image-loader';
import GifLoader from '../GifLoader/GifLoader';


const GifDisplay = ({ gif }) => {
  const history = useHistory();

  if (!gif.images) {
    history.push('/');
    return <></>;
  }



  const url = gif.images.fixed_width.url || '';
  const title = `${gif.searchTerm}: ${gif.title}` || '';

  return (
    <div className='_40 around'>
      {/*  className="gifDisplay" */}
      <h3 className="gifTitle">{title}</h3>
      {/* <div className="imgDiv"> */}
      <ImageLoader
        placeholder='../../../2705-image-loading.gif'
        image={url}
        renderComponent={({ src }) => (<img src={src} alt={title} />)}
        renderLoading={() => (<GifLoader />)}
        renderError={() => (<text>Failed to load your gif, please try again </text>)}
    />
      {/* </div> */}
    </div>
  );
};

export default connect()(GifDisplay);
