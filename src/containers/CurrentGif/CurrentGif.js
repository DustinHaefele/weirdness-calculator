import { connect } from 'react-redux';
import CurrentGifDisplay from '../../components/CurrentGifDisplay/CurrentGifDisplay';

const mapStateToProps = state => ({
  gif: state.currentGif
})

export default connect(mapStateToProps)(CurrentGifDisplay)