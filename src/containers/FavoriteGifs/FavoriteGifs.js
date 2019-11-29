import { connect } from 'react-redux';
import Favorites from '../../components/Favorites/Favorites';
import { setError } from '../../redux/actions';


const mapStateToProps = state => ({
  favorites: state.favorites,
  error: state.error,
})

const mapDispatchToProps = dispatch => ({
  setError: error => dispatch(setError(error)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)