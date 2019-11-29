import { connect } from 'react-redux';
import ResultsDisplay from '../../components/ResultsDisplay/ResultsDisplay';
import { batchActions } from 'redux-batched-actions';
import { setError, setCurrentGif, clearFavorites } from '../../redux/actions';

const mapStateToProps = state => ({
  favorites: state.favorites,
  error: state.error,
})

const mapDispatchToProps = dispatch => ({
  handleRestart: () =>     dispatch(batchActions([setError({}), setCurrentGif({}), clearFavorites()])),
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultsDisplay)