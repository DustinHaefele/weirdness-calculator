import { combineReducers } from 'redux'
import favorites from './favorites'
import currentGif from './currentGif';

export default combineReducers({
  favorites,
  currentGif
})