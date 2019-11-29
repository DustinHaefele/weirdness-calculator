import { connect } from 'react-redux';
import ResultsDisplay from '../../components/ResultsDisplay/ResultsDisplay';


const mapStateToProps = state => ({
  favorites: state.favorites,
  error: state.error,
})

export default connect(mapStateToProps)(ResultsDisplay)