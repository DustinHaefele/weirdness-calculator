import React from 'react';
import SearchSection from '../../components/SearchSection/SearchSection';
import CurrentGif from '../../containers/CurrentGif/CurrentGif';
import FavoriteGifs from '../../containers/FavoriteGifs/FavoriteGifs';

export default function GifPage() {
  
  return (<div>
    <SearchSection />
    <CurrentGif />
    <FavoriteGifs />
  </div>)
}