import { connect } from 'react-redux';
import SearchSection from '../../components/SearchSection/SearchSection';

const mapStateToProps = state => ({
  favorites: state.favorites
})

export default connect(mapStateToProps)(SearchSection)