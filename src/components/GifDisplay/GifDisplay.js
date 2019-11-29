import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './GifDisplay.css';
import ImageLoader from 'rc-image-loader';
import GifLoader from '../GifLoader/GifLoader';

//Reusable Presentational component to display a single GIF in either favorites, results, or current.
export default function GifDisplay({ gif, isFavorite, handleRemove }) {
  if (!gif.images) {
    return <></>;
  }

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
