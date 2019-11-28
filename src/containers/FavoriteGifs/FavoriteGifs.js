import { connect } from 'react-redux';
import Favorites from '../../components/Favorites/Favorites';

const mapStateToProps = state => ({
  favorites: state.favorites,
  error: state.error
})

export default connect(mapStateToProps)(Favorites)