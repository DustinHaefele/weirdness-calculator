import { connect } from 'react-redux';
import CurrentGifDisplay from '../../components/CurrentGifDisplay/CurrentGifDisplay';
import { addToFavorites, setCurrentGif, setError } from '../../redux/actions';
import { batchActions } from 'redux-batched-actions';

const mapStateToProps = state => ({
  gif: state.currentGif,
  favorites: state.favorites,
  error: state.error
})

const mapDispatchToProps = dispatch => ({
  setError: error => dispatch(setError(error)),
  addCurrentToFavorites: gif => dispatch(batchActions([addToFavorites(gif), setCurrentGif({}), setError({})]))
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentGifDisplay)