import React from 'react';
import SearchContainer from '../../containers/SearchContainer/SearchContainer';
import CurrentGif from '../../containers/CurrentGif/CurrentGif';
import FavoriteGifs from '../../containers/FavoriteGifs/FavoriteGifs';
import './GifPage.css';

export default function GifPage() {
  return (
    <div className="row">

        <div className="_55 vh column">
          <SearchContainer />
          <CurrentGif />
        </div>
        <div className="likedSection _45 vh">
          <h2 className='sectionTitle'>YOUR LIKED GIFS</h2>
          <FavoriteGifs />
        </div>
    </div>
  );
}
