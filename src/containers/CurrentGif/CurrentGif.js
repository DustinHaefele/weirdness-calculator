import { connect } from 'react-redux';
import GifDisplay from '../../components/GifDisplay/GifDisplay';

const mapStateToProps = state => ({
  gif: state.currentGif
})

export default connect(mapStateToProps)(GifDisplay)