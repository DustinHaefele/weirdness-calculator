import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SearchSection from './components/SearchSection/SearchSection';
import CurrentGif from './containers/CurrentGif/CurrentGif';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchSection />
      <CurrentGif />
    </div>
  );
}

export default App;
