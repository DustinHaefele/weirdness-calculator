import React from 'react';
import { Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import LandingPage from './routes/LandingPage/LandingPage';
import GifPage from './routes/GifPage/GifPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch> 
        <Route exact path='/'component={LandingPage} />
        <Route path='/gifs' component={GifPage} />
      </Switch>
    </div>
  );
}

export default App;
