import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';
import { setCurrentGif, setError } from '../../redux/actions';
import SearchSection from '../../components/SearchSection/SearchSection';

const mapStateToProps = state => ({
  favorites: state.favorites,
  error: state.error
})

const mapDispatchtoProps = dispatch => ({
  clearCurrent: () => dispatch(setCurrentGif({})),
  setError: error => dispatch(setError(error)),
  setCurrentGif: gif => dispatch(batchActions([setCurrentGif(gif), setError({})])),

})

export default connect(mapStateToProps, mapDispatchtoProps)(SearchSection)