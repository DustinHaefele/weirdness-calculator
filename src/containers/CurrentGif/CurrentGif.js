import { connect } from 'react-redux';
import CurrentGifDisplay from '../../components/CurrentGifDisplay/CurrentGifDisplay';

const mapStateToProps = state => ({
  gif: state.currentGif,
  favorites: state.favorites,
  error: state.error
})

export default connect(mapStateToProps)(CurrentGifDisplay)