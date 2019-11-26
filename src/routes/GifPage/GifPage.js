import React from 'react';
import SearchSection from '../../components/SearchSection/SearchSection';
import CurrentGif from '../../containers/CurrentGif/CurrentGif';
import FavoriteGifs from '../../containers/FavoriteGifs/FavoriteGifs';

export default function GifPage() {
  return (
    <div className="row">
      <section className="column _50">
        <SearchSection />
        <CurrentGif />
      </section>
      <section className="column _50">
        <FavoriteGifs />
      </section>
    </div>
  );
}
