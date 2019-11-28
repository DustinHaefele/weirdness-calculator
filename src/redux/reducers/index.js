import { combineReducers } from 'redux';
import favorites from './favorites';
import currentGif from './currentGif';
import error from './error';
import isCalc from './isCalc';

export default combineReducers({
  favorites,
  currentGif,
  error,
  isCalc,
});
