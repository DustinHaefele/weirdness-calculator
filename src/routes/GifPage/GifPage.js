import React from 'react';
import SearchContainer from '../../containers/SearchContainer/SearchContainer';
import CurrentGif from '../../containers/CurrentGif/CurrentGif';
import FavoriteGifs from '../../containers/FavoriteGifs/FavoriteGifs';

export default function GifPage() {
  return (
    <div className="row">
      <section className="column _50">
        <SearchContainer />
        <CurrentGif />
      </section>
      <section className="column _50">
        <FavoriteGifs />
      </section>
    </div>
  );
}
