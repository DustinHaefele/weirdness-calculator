import React from 'react';
import SearchContainer from '../../containers/SearchContainer/SearchContainer';
import CurrentGif from '../../containers/CurrentGif/CurrentGif';
import FavoriteGifs from '../../containers/FavoriteGifs/FavoriteGifs';
import './GifPage.css';

//Presentational component to display main page when routed there by react router.
export default function GifPage() {
  return (
    <div className="row">

        <div className="_55 vh column columnDisplay">
          <SearchContainer />
          <CurrentGif />
        </div>
        <div className="likedSection _45 vh columnDisplay">
          <h2 className='sectionTitle'>YOUR LIKED GIFS</h2>
          <FavoriteGifs />
        </div>
    </div>
  );
}
