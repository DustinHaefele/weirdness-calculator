import React from 'react';
import { Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import GifPage from './routes/GifPage/GifPage';
import ResultsPage from './routes/ResultsPage/ResultsPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch> 
        <Route exact path='/' component={GifPage} />
        <Route path='/results' component={ResultsPage} />
      </Switch>
    </div>
  );
}

export default App;
