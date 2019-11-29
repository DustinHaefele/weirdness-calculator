import { connect } from 'react-redux';
import Slider from '../../components/Slider/Slider';
import { setCurrentGif, setError } from '../../redux/actions';
import { batchActions } from 'redux-batched-actions';

const mapStateToProps = state => ({
  gif: state.currentGif,
  favorites: state.favorites,
  error: state.error
})

const mapDispatchToProps = dispatch => ({
  setError: error => dispatch(setError(error)),
  setCurrentGif: gif => dispatch(batchActions([setCurrentGif(gif), setError({})])),
})

export default connect(mapStateToProps, mapDispatchToProps)(Slider)