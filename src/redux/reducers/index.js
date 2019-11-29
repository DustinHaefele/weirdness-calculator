import { combineReducers } from 'redux';
import favorites from './favorites';
import currentGif from './currentGif';
import error from './error';

export default combineReducers({
  favorites,
  currentGif,
  error,
});
