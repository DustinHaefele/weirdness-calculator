import React from 'react';
import SearchContainer from '../../containers/SearchContainer/SearchContainer';
import CurrentGif from '../../containers/CurrentGif/CurrentGif';
import FavoriteGifs from '../../containers/FavoriteGifs/FavoriteGifs';

export default function GifPage() {
  return (
    <div className="row">
      <div className="row _100">
        <div className="column _40">
          <SearchContainer />
        </div>
        <div className="column _60">
          <h2>YOUR LIKED GIFS</h2>
        </div>
      </div>
      <div className="row _100">
        <div className="column _40">
          <CurrentGif />
        </div>
        <div className="column _60 between">
          <FavoriteGifs />
        </div>
      </div>
    </div>
  );
}
