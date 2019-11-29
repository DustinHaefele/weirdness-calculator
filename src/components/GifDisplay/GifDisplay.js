import React from 'react';
// import { removeFromFavorites, setError } from '../../redux/actions';
// import { batchActions } from 'redux-batched-actions';
// import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './GifDisplay.css';
import ImageLoader from 'rc-image-loader';
import GifLoader from '../GifLoader/GifLoader';

export default function GifDisplay({ gif, isFavorite, handleRemove }) {
  if (!gif.images) {
    return <></>;
  }

  // function handleRemove(id) {
  //   dispatch(batchActions([removeFromFavorites(id), setError({})]));
  // }

  const url = gif.images.fixed_width.url || '';
  const title = `${gif.searchTerm} gif` || '';

  const remove = isFavorite ? 'remove' : 'hidden';

  return (
    <div>
      <h3 className="gifTitle">{title}</h3>
      <div className="wrapper">
        <ImageLoader
          placeholder="../../../2705-image-loading.gif"
          image={url}
          renderComponent={({ src }) => <img src={src} alt={title} />}
          renderLoading={() => <GifLoader isFavorite={isFavorite} />}
          renderError={() => (
            <text>Failed to load your gif, please try again </text>
          )}
        />
        <FontAwesomeIcon
          icon={faTimesCircle}
          className={remove}
          onClick={() => handleRemove(gif.id)}
        />
      </div>
    </div>
  );
}


