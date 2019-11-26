import { connect } from 'react-redux';
import SearchSection from '../../components/SearchSection/SearchSection';

const mapStateToProps = state => ({
  favorites: state.favorites,
  error: state.error
})

export default connect(mapStateToProps)(SearchSection)